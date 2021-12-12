import { createSlice } from '@reduxjs/toolkit';

const initialState: number = 0;

const loadingSlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        addToLoading: (state) => {
            return state + 1;
        },
        removeFromLoading: (state) => {
            return state === 0 ? 0 : state - 1;
        },
    },
});

const { actions, reducer } = loadingSlice;

const { addToLoading, removeFromLoading } = actions;

export { addToLoading, removeFromLoading };

export default reducer;
