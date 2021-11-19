import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import gameStateSlice from './gameState';
import userStateSlice from './userState';
import gamesArraySlice from './gamesArrayState';
import gameIndexSlice from './gameIndexState';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedUserState = persistReducer(persistConfig, userStateSlice);

const store = configureStore({
  reducer: {
    gameState: gameStateSlice,
    userState: persistedUserState,
    gamesArray: gamesArraySlice,
    gameIndex: gameIndexSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  }),
});

const persistor = persistStore(store);

export {store, persistor};