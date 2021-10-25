import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { GamePage, MainMenu } from './components';
import { NativeRouter, Route } from 'react-router-native';
import ProfilePage from './components/ProfilePage';

export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <Route component={GamePage} path="/gamepage" exact />
        <Route component={MainMenu} path="/" exact />
        <Route component={ProfilePage} path="/profilepage" exact />
      </View>
      <StatusBar hidden/>
    </NativeRouter>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});