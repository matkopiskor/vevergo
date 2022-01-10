import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUser } from '../../api/user';
import { clearLocalStorageByKey, createInitialState, saveToLocalStorage } from '../persistors';
import { PERSISTED_KEYS } from '../persistors/keys';

interface UserState {
    id?: number;
    token?: string;
    data?: any;
}

const init = {};

const initialState: UserState = createInitialState(PERSISTED_KEYS.USER, init);

export const fetchUser = createAsyncThunk<any, number, { rejectValue: Error }>('user/fetch', async (id, thunkApi) => {
    try {
        const response = await getUser(id);
        const { data } = response;
        return { data };
    } catch (error) {
        return thunkApi.rejectWithValue(error as Error) || 'Something went wrong';
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setData: (state, action) => {
            const { data, token } = action.payload;
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
            };
            saveToLocalStorage(PERSISTED_KEYS.USER, lsObj);
            return newState;
        },
        clearData: () => {
            clearLocalStorageByKey(PERSISTED_KEYS.USER);
            return {};
        },
    },
    extraReducers: ({ addCase }) => {
        addCase(fetchUser.fulfilled, (state, action) => {
            console.log(action.payload);
            const { data } = action.payload;
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
                const newState = {
                    ...state,
                    id,
                    token,
                    data: userData,
                };
                saveToLocalStorage(PERSISTED_KEYS.USER, lsObj);
                return newState;
            }
            return state;
        });
    },
});

const { actions, reducer } = userSlice;

const { setData, clearData } = actions;

export { setData, clearData };

export default reducer;
