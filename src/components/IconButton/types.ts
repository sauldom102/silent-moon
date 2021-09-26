import { ViewStyle } from 'react-native';

type Icon = 'back' | 'close' | 'like' | 'download';

export type Props = {
  backgroundColor: string;
  borderColor?: string;
  iconColor: string;
  icon?: Icon;
  onPress?: () => void;
  style?: ViewStyle;
};

export type ContainerProps = {
  backgroundColor: string;
  borderColor?: string;
};
