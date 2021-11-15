import { createSlice } from '@reduxjs/toolkit';

export const gamesArraySlice = createSlice({
    name: 'gameState',
    initialState: { value: [] },
    reducers: {
        shuffleArray: (state, action) => {
            state.value = 
        },
    },
});

export const { changeGame } = gamesArraySlice.actions;

export default gamesArraySlice.reducer;