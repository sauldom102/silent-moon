import React, { FC } from 'react';
import { Platform, UIManager, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import Navigator from 'navigator';
import theme from 'theme';
import useConnect from './connect';
import { Props } from './types';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Root: FC<Props> = () => {
  const { navigationRef } = useConnect();

  return (
    <ThemeProvider theme={theme}>
      <StatusBar translucent />
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <Navigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default Root;
