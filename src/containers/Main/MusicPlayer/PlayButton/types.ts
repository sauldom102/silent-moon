import { ViewStyle } from 'react-native';

export type Props = {
  onPress?: () => void;
  playing?: boolean;
  color?: string;
  iconColor?: string;
  style?: ViewStyle;
};

export type ColorProps = {
  color: string;
};
