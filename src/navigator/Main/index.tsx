import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tabs, Welcome, ChooseTopic, MusicTopic } from 'containers';
import { stackScreenOptions } from '../constants';

const Stack = createNativeStackNavigator();

const Main = () => (
  <Stack.Navigator
    screenOptions={stackScreenOptions}
    initialRouteName="Welcome"
  >
    <Stack.Screen name="Tabs" component={Tabs} />
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="ChooseTopic" component={ChooseTopic} />
    <Stack.Screen name="MusicTopic" component={MusicTopic} />
  </Stack.Navigator>
);

export default Main;
