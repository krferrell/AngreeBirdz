import { createSlice } from '@reduxjs/toolkit';

export const gameStateSlice = createSlice({
    name: 'gameState',
    initialState: { value: 'PLAY' },
    reducers: {
        changeGame: (state, action) => {
            state.value = action.payload
        },
    },
});

export const { changeGame } = gameStateSlice.actions;

export default gameStateSlice.reducer;