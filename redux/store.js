
import { configureStore } from '@reduxjs/toolkit';
import gameStateSlice from './gameState';

const store = configureStore({
  reducer: {
    gameState: gameStateSlice,
  }
});

export default store;