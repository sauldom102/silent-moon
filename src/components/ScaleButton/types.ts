import { ViewStyle } from 'react-native';

export type Props = {
  children: Element;
  onPress?: () => void;
  activeOpacity?: number;
  style?: ViewStyle;
};
