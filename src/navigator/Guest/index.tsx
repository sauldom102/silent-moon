import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Front, Login, SignUp } from 'containers';
import { stackScreenOptions } from '../constants';

const Stack = createNativeStackNavigator();

const Guest = () => (
  <Stack.Navigator screenOptions={stackScreenOptions} initialRouteName="Front">
    <Stack.Screen name="Front" component={Front} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

export default Guest;
