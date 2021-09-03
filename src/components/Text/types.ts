import { ReactNode } from 'react';
import { TextProps } from 'react-native';

// TODO: add more weights here if needed
export type Fonts = '';

export type Props = {
  family?: Fonts;
  children?: ReactNode;
} & TextProps;
