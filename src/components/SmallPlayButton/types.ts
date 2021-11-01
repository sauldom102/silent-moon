import { ViewStyle } from 'react-native';

export type Variant = 'light' | 'primary' | 'secondary';

export type Props = {
  onPress?: () => void;
  playing?: boolean;
  variant?: Variant;
  enabled?: boolean;
  style?: ViewStyle;
};

export type MainProps = {
  color: string;
  borderColor?: string;
};
