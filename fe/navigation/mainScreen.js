// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from './screens/LoginScreen';
import SettingScreen from './screens/SettingScreen';
import HomeScreen from './screens/HomeScreen';

const Stack = createNativeStackNavigator();

const MainScreen = () => {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen options={{ headerShown: false }} name="Login" component={LoginScreen} />
    //     <Stack.Screen options={{ headerBackVisible: false }} name="Setting" component={SettingScreen} />

    //   </Stack.Navigator>
    // </NavigationContainer>
    <HomeScreen />
  );
}
export default MainScreen;