import { ViewStyle } from 'react-native';

export type Props = {
  id: string;
  title: string;
  topic: string;
  duration: string;
  onPress?: (id: string) => void;
  style?: ViewStyle;
};
