import { ReactNode } from 'react';
import { TextProps } from 'react-native';

// TODO: add more weights here if needed
export type Fonts =
  | 'Garamond Premier Pro Semibold'
  | 'HelveticaNeue'
  | 'HelveticaNeue-SemiBold'
  | 'HelveticaNeue-Medium'
  | 'HelveticaNeue-Bold'
  | 'HelveticaNeue-Thin'
  | 'HelveticaNeue-Light'
  | 'HelveticaNeue-UltraLight';

export type Props = {
  family?: Fonts;
  children?: ReactNode;
} & TextProps;
