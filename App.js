import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { Provider } from 'react-redux';
import {store, persistor }  from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { LevelSelect, MainMenu, ProfilePage } from './components';
import randomGameSelect from './utils/randomGameSelect';

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <NativeRouter>
        <View style={styles.container}>
          <Route component={randomGameSelect} path="/game" exact />
          <Route component={LevelSelect} path="/levelselect" exact />
          <Route component={ProfilePage} path="/profilepage" exact />
          <Route component={MainMenu} path="/" exact />
        </View>
        <StatusBar hidden/>
      </NativeRouter>
    </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});