import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getOrganizationMembership, getOrganizations } from '../../api/organizations';
import { getOrgPrivacy } from '../../api/orgPrivacy';
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

export const fetchOrgs = createAsyncThunk<any, void, { rejectValue: Error }>(
    'organizations/fetch',
    async (_, thunkApi) => {
        try {
            const orgsResponse = await getOrganizations();
            const orgsMemResponse = await getOrganizationMembership();
            const orgPrivacyResponse = await getOrgPrivacy();
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
    },
});

const { reducer, actions } = organizationsSlice;
const { setActive, removeActive } = actions;

export { setActive, removeActive };

export default reducer;
