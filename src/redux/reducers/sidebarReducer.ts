import { createSlice } from '@reduxjs/toolkit';
// import { createInitialState, saveToLocalStorage } from '../persistors';
// import { PERSISTED_KEYS } from '../persistors/keys';

interface HomeViewState {
    docked: boolean;
    open: boolean;
}

const initialState: HomeViewState = {
    docked: false,
    open: true,
};

const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        toggleDocked: (state) => {
            return {
                ...state,
                docked: !state.docked,
            };
        },
        setDocked: (state, action) => {
            return {
                ...state,
                docked: action.payload,
            };
        },
        toggleOpen: (state) => {
            return {
                ...state,
                open: !state.open,
            };
        },
        setOpen: (state, action) => {
            return {
                ...state,
                open: action.payload,
            };
        },
    },
});

const { actions, reducer } = sidebarSlice;
const { toggleDocked, toggleOpen, setDocked, setOpen } = actions;

export { toggleDocked, toggleOpen, setDocked, setOpen };
export default reducer;
