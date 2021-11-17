import { createSlice } from '@reduxjs/toolkit';

export const gameIndexSlice = createSlice({
    name: 'gamesIndex',
    initialState: { value: 0 },
    reducers: {
        saveIndex: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { saveIndex } = gameIndexSlice.actions;

export default gameIndexSlice.reducer;