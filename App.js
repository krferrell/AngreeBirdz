import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GamePage, LevelSelect, MainMenu, SignIn } from './components';
import KGameEngine from './components/kennyGame/KGameEngine';
import { NativeRouter, Route } from 'react-router-native';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {

  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
        <Route component={KGameEngine} path="/kgame" exact />
          <Route component={LevelSelect} path="/levelselect" exact />
          <Route component={SignIn} path="/profile" exact />
          <Route component={MainMenu} path="/" exact />
        </View>
        <StatusBar hidden/>
      </NativeRouter>
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