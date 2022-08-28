import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Tabs from './TabNavigation';
import Home from '../Screens/Home';
import Login from '../Screens/Login';

const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Tabs} />
    </Stack.Navigator>
  );
}

export default StackNavigation;
