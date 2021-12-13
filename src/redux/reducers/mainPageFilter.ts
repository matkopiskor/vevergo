import { createSlice } from '@reduxjs/toolkit';

interface MainPageFilterState {
    searchText: string | undefined;
    clearValue: boolean;
}

const initialState: MainPageFilterState = {
    searchText: undefined,
    clearValue: false,
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
        },
        setClearValue: (state, action) => {
            state.clearValue = action.payload;
        },
    },
});

const { actions, reducer } = mainPageFilterSlice;

const { setSearchText, clearSearchText, setClearValue } = actions;

export { setSearchText, clearSearchText, setClearValue };

export default reducer;
