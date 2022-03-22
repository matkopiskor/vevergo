import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCultureData } from '../../api/cultureData';
import { getPrivacy } from '../../api/privacy';
import { getUser } from '../../api/user';
import { clearLocalStorageByKey, createInitialState, saveToLocalStorage } from '../persistors';
import { PERSISTED_KEYS } from '../persistors/keys';

interface UserState {
    id?: number;
    token?: string;
    data?: any;
    cultureData?: any;
    privacy?: any;
}

const init = {};

const initialState: UserState = createInitialState(PERSISTED_KEYS.USER, init);

export const fetchUser = createAsyncThunk<any, number, { rejectValue: Error }>('user/fetch', async (id, thunkApi) => {
    try {
        const response = await getUser(id);
        const cultureDataResponse = await getCultureData();
        const privacyResponse = await getPrivacy();
        const { data } = response;
        return { data, cultureData: cultureDataResponse.data, privacy: privacyResponse.data };
    } catch (error) {
        return thunkApi.rejectWithValue(error as Error) || 'Something went wrong';
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setData: (state, action) => {
            const { data, token, cultureData, privacy } = action.payload;
            const id = data.id;
            const lsObj = {
                token,
                id,
            };
            const newState = {
                ...state,
                id,
                token,
                data,
                cultureData,
                privacy,
            };
            saveToLocalStorage(PERSISTED_KEYS.USER, lsObj);
            return newState;
        },
        clearData: () => {
            clearLocalStorageByKey(PERSISTED_KEYS.USER);
            return {};
        },
        updateData: (state, action) => {
            const newState = {
                ...state,
                data: action.payload,
            };
            return newState;
        },
    },
    extraReducers: ({ addCase }) => {
        addCase(fetchUser.fulfilled, (state, action) => {
            const { data, cultureData, privacy } = action.payload;
            if (data?.error_id !== 0) {
                // TODO
            } else {
                const token = state.token;
                const userData = data.items[0];
                const id = userData.id;
                const lsObj = {
                    token,
                    id,
                };
                let newState: any = {
                    ...state,
                    id,
                    token,
                    data: userData,
                };
                if (cultureData.items.length !== 0) {
                    newState.cultureData = cultureData.items[0];
                }
                if (privacy.items.length !== 0) {
                    newState.privacy = privacy.items[0];
                }
                saveToLocalStorage(PERSISTED_KEYS.USER, lsObj);
                return newState;
            }
            return state;
        });
    },
});

const { actions, reducer } = userSlice;

const { setData, clearData, updateData } = actions;

export { setData, clearData, updateData };

export default reducer;
