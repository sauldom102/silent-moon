import { useContext } from 'react';
import { Dimensions, Platform } from 'react-native';
import { ThemeContext } from 'styled-components';

export const colors = {
  title: '#3F414E',
  subtitle: '#a1a4b2',
  background: '#fff',
  white: '#fff',
  dynamicWhite: '#fff',
  black: '#000',
  primary: '#8E97FD',
  transparent: 'rgba(0,0,0,0)',
};

export const nightColors = {
  ...colors,
  title: '#E6E7F2',
  subtitle: '#98A1BD',
  background: '#03174C',
  dynamicWhite: '#3F414E',
};

const { width, height } = Dimensions.get('window');

export const device = {
  width,
  height,
  isIOS: Platform.OS === 'ios',
  isAndroid: Platform.OS === 'android',
};

const sizes = {
  headerImageHeight: width * (290 / 414),
};

const theme = {
  colors,
  device,
  sizes,
  isNightMode: false,
};

export const nightTheme = {
  ...theme,
  colors: nightColors,
  isNightMode: true,
};

export type Theme = typeof theme;

export default theme as Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const useTheme = () => useContext(ThemeContext);
