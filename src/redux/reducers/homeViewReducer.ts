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

const countriesSlice = createSlice({
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
    },
});

const { actions, reducer } = countriesSlice;
const { setActive, setSort } = actions;

export { setActive, setSort };
export default reducer;
