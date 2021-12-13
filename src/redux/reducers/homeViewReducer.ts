import { createSlice } from '@reduxjs/toolkit';
import { createInitialState, saveToLocalStorage } from '../persistors';
import { PERSISTED_KEYS } from '../persistors/keys';

interface HomeViewState {
    active: 'list' | 'grid';
    sortValue: number | undefined;
}

const init = {
    active: 'list',
};

const initialState: HomeViewState = {
    active: createInitialState(PERSISTED_KEYS.HOME_VIEW, init).active,
    sortValue: undefined,
};

const homeViewSlice = createSlice({
    name: 'countries',
    initialState,
    reducers: {
        setActive: (state, action) => {
            const newState = {
                ...state,
                active: action.payload,
            };
            saveToLocalStorage(PERSISTED_KEYS.HOME_VIEW, { active: action.payload });
            return newState;
        },
        setSort: (state, action) => {
            return {
                ...state,
                sortValue: action.payload,
            };
        },
        clearSort: (state) => {
            return {
                ...state,
                sortValue: undefined,
            };
        },
    },
});

const { actions, reducer } = homeViewSlice;
const { setActive, setSort, clearSort } = actions;

export { setActive, setSort, clearSort };
export default reducer;
