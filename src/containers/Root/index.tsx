import React, { FC } from 'react';
import { Platform, UIManager, StatusBar } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components';
import Navigator from 'navigator';
import useConnect from './connect';
import { Props } from './types';

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Root: FC<Props> = () => {
  const { apolloClient, theme, ready, navigationRef } = useConnect();

  if (!ready || !apolloClient) {
    // TODO: Add loading screen
    return null;
  }

  return (
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <StatusBar translucent />
        <SafeAreaProvider>
          <NavigationContainer ref={navigationRef}>
            <Navigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
};

export default Root;
