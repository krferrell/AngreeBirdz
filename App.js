import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route } from 'react-router-native';
import { Provider } from 'react-redux';
import store from './redux/store';
import { LevelSelect, MainMenu, SignIn } from './components';
import randomGameSelect from './utils/randomGameSelect';

export default function App() {
  return (
    <Provider store={store}>
      <NativeRouter>
        <View style={styles.container}>
          <Route component={randomGameSelect} path="/game" exact />
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