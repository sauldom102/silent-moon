import { ViewStyle } from 'react-native';

export type Props = {
  id: string;
  title: string;
  topic: string;
  duration: string;
  onPress?: (id: string) => void;
  light?: boolean;
  style?: ViewStyle;
};

export type LightProps = {
  light: boolean;
};
