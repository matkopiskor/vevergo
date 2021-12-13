import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCurrencies } from '../../api/currencies';
import { createInitialState, saveToLocalStorage } from '../persistors';
import { PERSISTED_KEYS } from '../persistors/keys';

interface CurrenciesState {
    list: { id: number; name: string }[];
    active: number;
}

const init = { list: [], active: 44 };

const initialState: CurrenciesState = createInitialState(PERSISTED_KEYS.CURRENCIES, init);

export const fetchCurrencies = createAsyncThunk<any, void, { rejectValue: Error }>(
    'currencies/fetch',
    async (_, thunkApi) => {
        try {
            const response = await getCurrencies();
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error as Error) || 'Something went wrong';
        }
    },
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
            saveToLocalStorage(PERSISTED_KEYS.CURRENCIES, newState);
            return newState;
        },
    },
    extraReducers: ({ addCase }) => {
        addCase(fetchCurrencies.fulfilled, (state, action) => {
            const newState = { ...state, list: action.payload.items };
            saveToLocalStorage(PERSISTED_KEYS.CURRENCIES, newState);
            return newState;
        });
    },
});

const { actions, reducer } = currenciesSlice;

const { setActive } = actions;

export { setActive };

export default reducer;
