import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getListingTypes } from '../../api/listingTypes';
import { createInitialState, saveToLocalStorage } from '../persistors';
import { PERSISTED_KEYS } from '../persistors/keys';

interface ListingTypesState {
    list: { id: number; name: string; price_hidden: boolean; price_mandatory: boolean }[];
}

const init = { list: [] };

const initialState: ListingTypesState = createInitialState(PERSISTED_KEYS.LISTING_TYPES, init);

export const fetchListingTypes = createAsyncThunk<any, void, { rejectValue: Error }>(
    'listingTypes/fetch',
    async (_, thunkApi) => {
        try {
            const response = await getListingTypes();
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error as Error) || 'Something went wrong';
        }
    },
);

const listingyTypesSlice = createSlice({
    name: 'listingTypes',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchListingTypes.fulfilled, (state, action) => {
            const newState = { ...state, list: action.payload.items };
            saveToLocalStorage(PERSISTED_KEYS.LISTING_TYPES, newState);
            return newState;
        });
    },
});

const { reducer } = listingyTypesSlice;

export default reducer;
