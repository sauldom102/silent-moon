import React, { FC } from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Front,
  Login,
  SignUp,
  Tabs,
  Welcome,
  ChooseTopic,
  SleepWelcome,
  PlayOption,
  Reminders,
  MusicPlayer,
  MusicTopic,
  Course,
} from 'containers';
import { useLoggedIn } from 'utils';
import { stackScreenOptions, modalsStackOptions } from './constants';
import { Props } from './types';

const RootStack = createNativeStackNavigator();
const MainStack = createNativeStackNavigator();
const GuestStack = createNativeStackNavigator();

const Guest = () => (
  <GuestStack.Navigator
    screenOptions={stackScreenOptions}
    initialRouteName="Front"
  >
    <GuestStack.Screen name="Front" component={Front} />
    <GuestStack.Screen name="SignUp" component={SignUp} />
    <GuestStack.Screen name="Login" component={Login} />
  </GuestStack.Navigator>
);

const Main = () => (
  <MainStack.Navigator
    screenOptions={stackScreenOptions}
    initialRouteName="Tabs"
  >
    <MainStack.Screen name="Tabs" component={Tabs} />
    <MainStack.Screen name="Welcome" component={Welcome} />
    <MainStack.Screen name="ChooseTopic" component={ChooseTopic} />
    <MainStack.Screen name="MusicTopic" component={MusicTopic} />
  </MainStack.Navigator>
);

const Navigator: FC<Props> = () => {
  const { isLoggedIn } = useLoggedIn();

  return (
    <RootStack.Navigator
      mode={Platform.OS === 'android' ? 'modal' : undefined}
      screenOptions={modalsStackOptions}
    >
      {isLoggedIn ? (
        <RootStack.Screen name="Main" component={Main} />
      ) : (
        <RootStack.Screen name="Guest" component={Guest} />
      )}
      <RootStack.Screen name="SleepWelcome" component={SleepWelcome} />
      <RootStack.Screen name="PlayOption" component={PlayOption} />
      <RootStack.Screen name="Reminders" component={Reminders} />
      <RootStack.Screen name="Course" component={Course} />
      <RootStack.Screen name="MusicPlayer" component={MusicPlayer} />
    </RootStack.Navigator>
  );
};

export default Navigator;
