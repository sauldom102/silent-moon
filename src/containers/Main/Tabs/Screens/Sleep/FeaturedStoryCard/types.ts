import { ViewStyle } from 'react-native';
import { Source } from 'react-native-fast-image';

export type Props = {
  title: string;
  subtitle: string;
  image: Source;
  style?: ViewStyle;
  onPress?: () => void;
};
