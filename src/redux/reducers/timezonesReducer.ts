import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getTimezones } from '../../api/timezones';
import { createInitialState, saveToLocalStorage } from '../persistors';
import { PERSISTED_KEYS } from '../persistors/keys';

interface TimezonesState {
    list: { id: number; name: string }[];
}

const init = { list: [] };

const initialState: TimezonesState = createInitialState(PERSISTED_KEYS.TIMEZONES, init);

export const fetchTimezones = createAsyncThunk<any, void, { rejectValue: Error }>(
    'listingTypes/fetch',
    async (_, thunkApi) => {
        try {
            const response = await getTimezones();
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error as Error) || 'Something went wrong';
        }
    }
);

const timezonesSlice = createSlice({
    name: 'timezones',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchTimezones.fulfilled, (state, action) => {
            const newState = { ...state, list: action.payload.items };
            saveToLocalStorage(PERSISTED_KEYS.TIMEZONES, newState);
            return newState;
        });
    },
});

const { reducer } = timezonesSlice;

export default reducer;
