import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAutocompleteData } from '../../api/autocompleteSearch';
import { AutocompleteData, AutocompleteOption } from '../../dto/autocompleteDto';

interface AutocompleteSearchState {
    options: AutocompleteOption[];
}

const initialState: AutocompleteSearchState = {
    options: [],
};

export const fetchAutocompleteData = createAsyncThunk<AutocompleteData, string, { rejectValue: Error }>(
    'autocompleteSearch/getAutocompleteData',
    async (search_text, thunkApi) => {
        try {
            const response = await getAutocompleteData(search_text);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error as Error) || 'Somethink went wrong';
        }
    }
);

const autocompleteSearchSlice = createSlice({
    name: 'autocompleteSearch',
    initialState,
    reducers: {
        clearAutocompleteData: (state) => {
            state.options = [];
        },
    },
    extraReducers: ({ addCase }) => {
        addCase(fetchAutocompleteData.fulfilled, (state, action) => {
            return state;
        });
    },
});

const { actions, reducer } = autocompleteSearchSlice;

const { clearAutocompleteData } = actions;

export { clearAutocompleteData };

export default reducer;
