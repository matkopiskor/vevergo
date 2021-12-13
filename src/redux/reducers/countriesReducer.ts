import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCountries } from '../../api/countries';
import { createInitialState, saveToLocalStorage } from '../persistors';
import { PERSISTED_KEYS } from '../persistors/keys';

interface CountriesState {
    list: { id: number; name: string; two_letter_code: string; three_letter_code: string; dialing_code: string }[];
}

const init = {
    list: [],
};

const initialState: CountriesState = createInitialState(PERSISTED_KEYS.COUNTRIES, init);

export const fetchCountries = createAsyncThunk<any, void, { rejectValue: Error }>(
    'countries/fetch',
    async (_, thunkApi) => {
        try {
            const response = await getCountries();
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error as Error) || 'Somethink went wrong';
        }
    },
);

const countriesSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchCountries.fulfilled, (state, action) => {
            const newState = { ...state, list: action.payload.items };
            saveToLocalStorage(PERSISTED_KEYS.COUNTRIES, newState);
            return newState;
        });
    },
});

const { reducer } = countriesSlice;

export default reducer;
