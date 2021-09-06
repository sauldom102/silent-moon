import { TextStyle, ViewStyle } from 'react-native';

export type Props = {
  title: string;
  subtitle: string;
  light?: boolean;
  style?: ViewStyle;
  titleStyle?: TextStyle;
};

export type LightProps = {
  light: boolean;
};
