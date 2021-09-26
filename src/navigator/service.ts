import { createRef } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';
import { ScreensParams } from './types';

export const navigationRef = createRef<NavigationContainerRef>();

export const navigate = <T extends keyof ScreensParams>(
  name: T,
  params?: ScreensParams[T],
) => {
  if (navigationRef.current) {
    navigationRef.current?.navigate(name, params);
  } else {
    let counter = 0;
    const int = setInterval(() => {
      if (navigationRef.current) {
        navigationRef.current?.navigate(name, params);
        clearInterval(int);
      } else {
        counter += 1;
      }

      if (counter === 10) {
        clearInterval(int);
      }
    }, 500);
  }
};
