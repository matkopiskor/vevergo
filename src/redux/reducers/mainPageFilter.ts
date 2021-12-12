import { createSlice } from '@reduxjs/toolkit';

interface MainPageFilterState {
    searchText: string | undefined;
}

const initialState: MainPageFilterState = {
    searchText: undefined,
};

const mainPageFilterSlice = createSlice({
    name: 'mainPageFilter',
    initialState,
    reducers: {
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
        clearSearchText: (state) => {
            state.searchText = undefined;
        }
    },
});

const { actions, reducer } = mainPageFilterSlice;

const { setSearchText, clearSearchText } = actions;

export { setSearchText, clearSearchText };

export default reducer;