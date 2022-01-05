import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getUser } from '../../api/user';
import { createInitialState, saveToLocalStorage } from '../persistors';
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
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error as Error) || 'Something went wrong';
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setData: (state, action) => {
            const newState = {
                ...state,
                data: action.payload,
            };
            saveToLocalStorage(PERSISTED_KEYS.USER, newState);
            return newState;
        },
    },
    extraReducers: ({ addCase }) => {
        addCase(fetchUser.fulfilled, (state, action) => {
            console.log(action.payload);
            // const newState = { ...state, list: action.payload.items };
            // saveToLocalStorage(PERSISTED_KEYS.LANGUAGES, newState);
            // return newState;
            return state;
        });
    },
});

const { actions, reducer } = userSlice;

const { setData } = actions;

export { setData };

export default reducer;
