import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCategoryTree } from '../../api/categoryTree';
import { createInitialState, saveToLocalStorage } from '../persistors';
import { PERSISTED_KEYS } from '../persistors/keys';

export interface Category {
    description: string | null;
    icon: string;
    id: number;
    is_last: boolean;
    name: string;
    parent_category: number | null;
    sort_order: number;
    children: Category[];
}

interface CategoryTreeState {
    tree: Category[];
}

const init = { tree: [] };

const initialState: CategoryTreeState = createInitialState(PERSISTED_KEYS.CATEGORY_TREE, init);

export const fetchCategoryTree = createAsyncThunk<any, void, { rejectValue: Error }>(
    'categoryTree/fetch',
    async (_, thunkApi) => {
        try {
            const response = await getCategoryTree();
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error as Error) || 'Something went wrong';
        }
    }
);

const categoryTreeSlice = createSlice({
    name: 'categoryTree',
    initialState,
    reducers: {},
    extraReducers: ({ addCase }) => {
        addCase(fetchCategoryTree.fulfilled, (state, action) => {
            const newState = { ...state, tree: action.payload.items };
            saveToLocalStorage(PERSISTED_KEYS.CATEGORY_TREE, newState);
            return newState;
        });
    },
});

const { reducer } = categoryTreeSlice;

export default reducer;
