import { createSlice } from '@reduxjs/toolkit';

export const gamesArraySlice = createSlice({
    name: 'gamesArray',
    initialState: { value: [] },
    reducers: {
        saveArray: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { saveArray } = gamesArraySlice.actions;

export default gamesArraySlice.reducer;