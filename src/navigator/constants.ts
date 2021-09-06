import { Platform } from 'react-native';

import { Theme } from '@react-navigation/native';
import {
  StackNavigationOptions,
  TransitionPresets,
} from '@react-navigation/stack';

import { colors } from 'theme';

export const stackScreenOptions =
  Platform.OS === 'android'
    ? ({
        headerShown: false,
        ...TransitionPresets.SlideFromRightIOS,
      } as StackNavigationOptions)
    : {
        headerShown: false,
      };

export const modalsStackOptions =
  Platform.OS === 'android'
    ? ({
        headerShown: false,
        ...TransitionPresets.ModalSlideFromBottomIOS,
      } as StackNavigationOptions)
    : {
        contentStyle: {
          backgroundColor: 'transparent',
          flex: 1,
        },
        headerShown: false,
        stackPresentation: 'transparentModal',
      };

export const navigationStyles = {
  colors: {
    background: colors.transparent,
  },
} as Theme;
