import { ViewStyle } from 'react-native';

export type Props = {
  id: string;
  title: string;
  topic: string;
  duration: string;
  color: string;
  light?: boolean;
  onPress?: (id: string) => void;
  style?: ViewStyle;
};

export type MainProps = {
  height: number;
  color: string;
};

export type LightProps = {
  light: boolean;
};
