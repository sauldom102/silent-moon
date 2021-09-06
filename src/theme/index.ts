import { useContext } from 'react';
import { Dimensions, Platform } from 'react-native';
import { ThemeContext } from 'styled-components';

export const colors = {
  background: '#fff',
  white: '#fff',
  black: '#000',
  primary: '#8E97FD',
  transparent: 'rgba(0,0,0,0)',
};

export const nightColors = {
  ...colors,
  background: '#03174C',
};

const { width, height } = Dimensions.get('window');

export const device = {
  width,
  height,
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
};

const theme = {
  colors,
  device,
};

export const nightTheme = {
  ...theme,
  colors: nightColors,
};

export type Theme = typeof theme;

export default theme as Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const useTheme = () => useContext(ThemeContext);
