import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteOrganization, getOrganizationMembership, getOrganizations } from '../../api/organizations';
import { getOrgPrivacy } from '../../api/orgPrivacy';
import { ERROR_CODES } from '../../constants/errorCodes';
import { notify } from '../../services/notifications';
import { clearLocalStorageByKey, saveToLocalStorage } from '../persistors';
import { PERSISTED_KEYS } from '../persistors/keys';

interface OrganizationState {
    list: {
        address?: string;
        address_2?: string;
        city?: string;
        country?: number;
        country_name?: string;
        create_date?: string;
        create_date_formatted?: string;
        description?: string;
        email?: string;
        fax_number?: number;
        id?: string;
        image_height?: number;
        image_width?: number;
        mobile_number?: number;
        name?: string;
        nickname?: string;
        organization_type?: number;
        organization_type_name?: string;
        owner?: string;
        owner_name?: string;
        owner_nickname?: string;
        phone_number?: number;
        post_code?: number;
        profile_image?: string;
        taxable?: boolean;
        theme_color?: string;
        vat_id?: string;
        website?: string;
    }[];
    membership: {
        address?: string;
        address_2?: string;
        city?: string;
        country?: number;
        country_name?: string;
        create_date?: string;
        create_date_formatted?: string;
        description?: string;
        email?: string;
        fax_number?: number;
        id?: string;
        image_height?: number;
        image_width?: number;
        mobile_number?: number;
        name?: string;
        nickname?: string;
        organization_type?: number;
        organization_type_name?: string;
        owner?: string;
        owner_name?: string;
        owner_nickname?: string;
        phone_number?: number;
        post_code?: number;
        profile_image?: string;
        taxable?: boolean;
        theme_color?: string;
        vat_id?: string;
        website?: string;
    }[];
    active?: string;
    privacy?: any;
}

const getOrgId = () => {
    const data = localStorage.getItem(PERSISTED_KEYS.ORGANIZATION);
    if (!data) {
        return undefined;
    }
    return JSON.parse(data);
};

const initialState: OrganizationState = { list: [], membership: [], active: getOrgId() };

export const fetchOrgs = createAsyncThunk<any, string | undefined, { rejectValue: Error }>(
    'organizations/fetch',
    async (token, thunkApi) => {
        const extraHeaders = !!token ? { iss_authentication_token: token } : undefined;
        try {
            const orgsResponse = await getOrganizations(extraHeaders);
            if ((orgsResponse as any)?.error_id && (orgsResponse as any)?.error_id !== 0) {
                notify({ type: 'WARNING', description: ERROR_CODES[(orgsResponse as any).error_id] });
            }
            const orgsMemResponse = await getOrganizationMembership(extraHeaders);
            if ((orgsMemResponse as any)?.error_id && (orgsMemResponse as any)?.error_id !== 0) {
                notify({ type: 'WARNING', description: ERROR_CODES[(orgsMemResponse as any).error_id] });
            }
            const orgPrivacyResponse = await getOrgPrivacy();
            if ((orgPrivacyResponse as any)?.error_id && (orgPrivacyResponse as any)?.error_id !== 0) {
                notify({ type: 'WARNING', description: ERROR_CODES[(orgPrivacyResponse as any).error_id] });
            }
            return {
                orgsResponse: orgsResponse.data,
                orgsMemResponse: orgsMemResponse.data,
                privacy: orgPrivacyResponse.data,
            };
        } catch (error) {
            return thunkApi.rejectWithValue(error as Error) || 'Something went wrong';
        }
    }
);

export const deleteOrgAction = createAsyncThunk<any, string, { rejectValue: Error }>(
    'organizations/delete',
    async (id, thunkApi) => {
        try {
            const resp = await deleteOrganization(id);
            if ((resp as any)?.error_id && (resp as any)?.error_id !== 0) {
                notify({ type: 'WARNING', description: ERROR_CODES[(resp as any).error_id] });
            }
            const orgsResponse = await getOrganizations();
            if ((orgsResponse as any)?.error_id && (orgsResponse as any)?.error_id !== 0) {
                notify({ type: 'WARNING', description: ERROR_CODES[(orgsResponse as any).error_id] });
            }
            const orgsMemResponse = await getOrganizationMembership();
            if ((orgsMemResponse as any)?.error_id && (orgsMemResponse as any)?.error_id !== 0) {
                notify({ type: 'WARNING', description: ERROR_CODES[(orgsMemResponse as any).error_id] });
            }
            const orgPrivacyResponse = await getOrgPrivacy();
            if ((orgPrivacyResponse as any)?.error_id && (orgPrivacyResponse as any)?.error_id !== 0) {
                notify({ type: 'WARNING', description: ERROR_CODES[(orgPrivacyResponse as any).error_id] });
            }
            return {
                orgsResponse: orgsResponse.data,
                orgsMemResponse: orgsMemResponse.data,
                privacy: orgPrivacyResponse.data,
            };
        } catch (error) {
            return thunkApi.rejectWithValue(error as Error) || 'Something went wrong';
        }
    }
);

const organizationsSlice = createSlice({
    name: 'organizations',
    initialState,
    reducers: {
        setActive: (state, action) => {
            const newState = {
                ...state,
                active: action.payload,
            };
            saveToLocalStorage(PERSISTED_KEYS.ORGANIZATION, action.payload);
            return newState;
        },
        removeActive: (state) => {
            const { active, ...rest } = state;
            clearLocalStorageByKey(PERSISTED_KEYS.ORGANIZATION);
            return rest;
        },
        clearOrgs: () => {
            clearLocalStorageByKey(PERSISTED_KEYS.ORGANIZATION);
            return {
                list: [],
                membership: [],
            };
        },
    },
    extraReducers: ({ addCase }) => {
        addCase(fetchOrgs.fulfilled, (state, action) => {
            const { orgsResponse, orgsMemResponse, privacy } = action.payload;
            const newState: any = {
                ...state,
                list: orgsResponse.items,
                membership: orgsMemResponse.items,
            };
            if (privacy?.items.length !== 0) {
                newState.privacy = privacy.items[0];
            }
            return newState;
        });
        addCase(deleteOrgAction.fulfilled, (state, action) => {
            const { orgsResponse, orgsMemResponse, privacy } = action.payload;
            const newState: any = {
                ...state,
                list: orgsResponse.items,
                membership: orgsMemResponse.items,
            };
            if (privacy?.items.length !== 0) {
                newState.privacy = privacy.items[0];
            }
            return newState;
        });
    },
});

const { reducer, actions } = organizationsSlice;
const { setActive, removeActive, clearOrgs } = actions;

export { setActive, removeActive, clearOrgs };

export default reducer;
