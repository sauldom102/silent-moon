import { ViewStyle } from 'react-native';

export type Props = {
  icon: 'like' | 'listen';
  title: string;
  light?: boolean;
  style?: ViewStyle;
};

export type TitleProps = {
  light: boolean;
};
