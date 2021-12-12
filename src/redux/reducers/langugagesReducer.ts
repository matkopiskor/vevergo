import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getLanguages } from '../../api/languages';
import { createInitialState, saveToLocalStorage } from '../persistors';
import { PERSISTED_KEYS } from '../persistors/keys';

interface LanguagesState {
    list: { id: number; name: string }[];
    active: number;
}

const init = { list: [], active: 1 };

const initialState: LanguagesState = createInitialState(PERSISTED_KEYS.LANGUAGES, init);

export const fetchLanguages = createAsyncThunk<any, void, { rejectValue: Error }>(
    'languages/fetch',
    async (_, thunkApi) => {
        try {
            const response = await getLanguages();
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error as Error) || 'Something went wrong';
        }
    }
);

const languagesSlice = createSlice({
    name: 'languages',
    initialState,
    reducers: {
        setActive: (state, action) => {
            const newState = {
                ...state,
                active: action.payload,
            };
            saveToLocalStorage(PERSISTED_KEYS.LANGUAGES, newState);
            return newState;
        },
    },
    extraReducers: ({ addCase }) => {
        addCase(fetchLanguages.fulfilled, (state, action) => {
            const newState = { ...state, list: action.payload.items };
            saveToLocalStorage(PERSISTED_KEYS.LANGUAGES, newState);
            return newState;
        });
    },
});

const { actions, reducer } = languagesSlice;

const { setActive } = actions;

export { setActive };

export default reducer;
