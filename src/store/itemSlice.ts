import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export type Item = {
    guid: string;
    name: string;
    path: string[];
    properties: {
        [key: string]: string | number;
    },
    imageId: string;
}

type ItemsState = {
    items: Item[];
    selectedItem: Item | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: ItemsState = {
    items: [],
    selectedItem: null,
    status: 'idle',
    error: null,
};

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
    const response = await fetch('http://localhost:8080/items');
    return response.json();
});

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        selectItem: (state, action) => {
            state.selectedItem = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.items = action.payload;
                if (action.payload.length > 0) {
                    state.selectedItem = action.payload[0];
                }
            })
            .addCase(fetchItems.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message || 'Failed to fetch items';
            });
    },
});

export const { selectItem } = itemsSlice.actions;
export default itemsSlice.reducer;