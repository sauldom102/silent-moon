import { createRef } from 'react';
import { NavigationContainerRef, StackActions } from '@react-navigation/native';
import { ScreensParams } from './types';

export const navigationRef = createRef<NavigationContainerRef>();

export const navigate = <T extends keyof ScreensParams>(
  name: T,
  params?: ScreensParams[T],
) => {
  if (navigationRef.current) {
    navigationRef.current?.navigate(name, params);
  }
};

export const push = <T extends keyof ScreensParams>(
  name: T,
  params?: ScreensParams[T],
) => {
  if (navigationRef.current) {
    navigationRef.current?.dispatch(StackActions.push(name, params));
  }
};
