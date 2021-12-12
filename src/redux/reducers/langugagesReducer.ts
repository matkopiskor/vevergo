import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getLanguages } from '../../api/languages';
import { createLanguagesIinitalState, saveLanguagesToLocalStorage } from '../persistors/languages';

interface LanguagesState {
    list: { id: number; name: string }[];
    active: number;
}

const initialState: LanguagesState = createLanguagesIinitalState();

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
            saveLanguagesToLocalStorage(newState);
            return newState;
        },
    },
    extraReducers: ({ addCase }) => {
        addCase(fetchLanguages.fulfilled, (state, action) => {
            const newState = { ...state, list: action.payload.items };

            saveLanguagesToLocalStorage(newState);

            return newState;
        });
    },
});

const { actions, reducer } = languagesSlice;

const { setActive } = actions;

export { setActive };

export default reducer;
