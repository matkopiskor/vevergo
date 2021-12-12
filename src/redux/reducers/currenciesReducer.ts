import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCurrencies } from '../../api/currencies';
import { createCurrenciesInitialState, saveCurrenciesToLocalStorage } from '../persistors/currencies';

interface CurrenciesState {
    list: { id: number; name: string }[];
    active: number;
}

const initialState: CurrenciesState = createCurrenciesInitialState();

export const fetchCurrencies = createAsyncThunk<any, void, { rejectValue: Error }>(
    'currencies/fetch',
    async (_, thunkApi) => {
        try {
            const response = await getCurrencies();
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error as Error) || 'Something went wrong';
        }
    }
);

const currenciesSlice = createSlice({
    name: 'currencies',
    initialState,
    reducers: {
        setActive: (state, action) => {
            const newState = {
                ...state,
                active: action.payload,
            };
            saveCurrenciesToLocalStorage(newState);

            return newState;
        },
    },
    extraReducers: ({ addCase }) => {
        addCase(fetchCurrencies.fulfilled, (state, action) => {
            const newState = { ...state, list: action.payload.items };

            saveCurrenciesToLocalStorage(newState);

            return newState;
        });
    },
});

const { actions, reducer } = currenciesSlice;

const { setActive } = actions;

export { setActive };

export default reducer;
