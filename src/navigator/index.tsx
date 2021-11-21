import React, { FC } from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SleepWelcome,
  PlayOption,
  Reminders,
  MusicPlayer,
  Course,
} from 'containers';
import { useLoggedIn } from 'utils';
import { modalsStackOptions } from './constants';
import Guest from './Guest';
import Main from './Main';
import { Props } from './types';

const Stack = createNativeStackNavigator();

const Navigator: FC<Props> = () => {
  const { isLoggedIn } = useLoggedIn();

  return (
    <Stack.Navigator
      mode={Platform.OS === 'android' ? 'modal' : undefined}
      screenOptions={modalsStackOptions}
    >
      {isLoggedIn ? (
        <Stack.Screen name="Main" component={Main} />
      ) : (
        <Stack.Screen name="Guest" component={Guest} />
      )}
      <Stack.Screen name="SleepWelcome" component={SleepWelcome} />
      <Stack.Screen name="PlayOption" component={PlayOption} />
      <Stack.Screen name="Reminders" component={Reminders} />
      <Stack.Screen name="Course" component={Course} />
      <Stack.Screen name="MusicPlayer" component={MusicPlayer} />
    </Stack.Navigator>
  );
};

export default Navigator;
