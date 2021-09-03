import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Welcome, Login, SignUp, Tabs } from 'containers';
import { generalStackScreenOptions } from './constants';
import { Props } from './types';

const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const GuestStack = createNativeStackNavigator();

const Guest = () => (
  <GuestStack.Navigator
    screenOptions={generalStackScreenOptions}
    initialRouteName="Welcome"
  >
    <GuestStack.Screen name="Welcome" component={Welcome} />
    <GuestStack.Screen name="SignUp" component={SignUp} />
    <GuestStack.Screen name="Login" component={Login} />
  </GuestStack.Navigator>
);

const Main = () => (
  <MainStack.Navigator
    screenOptions={generalStackScreenOptions}
    initialRouteName="Tabs"
  >
    <MainStack.Screen name="Tabs" component={Tabs} />
  </MainStack.Navigator>
);

const Navigator: FC<Props> = () => {
  const ready = true;
  return (
    <RootStack.Navigator screenOptions={generalStackScreenOptions}>
      {ready ? (
        <RootStack.Screen name="Main" component={Main} />
      ) : (
        <RootStack.Screen name="Guest" component={Guest} />
      )}
    </RootStack.Navigator>
  );
};

export default Navigator;
