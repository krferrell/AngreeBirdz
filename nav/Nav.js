import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LevelSelect, MainMenu, ProfilePage, SplashScreen } from '../components';
import randomGameSelect from '../utils/randomGameSelect';

const Stack = createNativeStackNavigator();

const Nav = () => {

    return(
        <Stack.Navigator initialRouteName={'Main Menu'} screenOptions={{ headerShown: false }} >
            <Stack.Screen name='Main Menu' component={MainMenu} />
            <Stack.Screen name='Splash Screen' component={SplashScreen} />
            <Stack.Screen name='Profile Page' component={ProfilePage} />
            <Stack.Screen name='Level Select' component={LevelSelect} />
            <Stack.Screen name='Random Game Select' component={randomGameSelect} />
        </Stack.Navigator>
    )
}

export default Nav;