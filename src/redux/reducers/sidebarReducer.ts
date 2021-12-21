import { createSlice } from '@reduxjs/toolkit';
// import { createInitialState, saveToLocalStorage } from '../persistors';
// import { PERSISTED_KEYS } from '../persistors/keys';

interface HomeViewState {
    docked: boolean;
    open: boolean;
    mobileOpen: boolean;
}

const initialState: HomeViewState = {
    docked: true,
    open: false,
    mobileOpen: false,
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
        toggleMobileOpen: (state) => {
            console.log('ok');
            return {
                ...state,
                mobileOpen: !state.mobileOpen,
            };
        },
        setMobileOpen: (state, action) => {
            return {
                ...state,
                mobileOpen: action.payload,
            };
        },
    },
});

const { actions, reducer } = sidebarSlice;
const { toggleDocked, toggleOpen, setDocked, setOpen, toggleMobileOpen, setMobileOpen } = actions;

export { toggleDocked, toggleOpen, setDocked, setOpen, toggleMobileOpen, setMobileOpen };
export default reducer;
