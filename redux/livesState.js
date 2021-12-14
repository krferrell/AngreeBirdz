import { createSlice } from '@reduxjs/toolkit';

export const livesStateSlice = createSlice({
    name: 'livesState',
    initialState: { value: 3 },
    reducers: {
        resetLives: (state) => {
            state.value = 3
        },
        loseLife: (state) => {
            state.value = state.value - 1
        },
    },
});

export const { resetLives, loseLife } = livesStateSlice.actions;

export default livesStateSlice.reducer;