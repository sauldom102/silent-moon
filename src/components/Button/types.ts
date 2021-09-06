import { TextStyle, ViewStyle } from 'react-native';

export type Variant = 'primary' | 'secondary' | 'link';

export type Props = {
  title: string;
  variant?: Variant;
  onPress?: () => void;
  loading?: boolean;
  enabled?: boolean;
  style?: ViewStyle;
  titleStyle?: TextStyle;
};

export type ContainerProps = {
  color: string;
};

export type TitleProps = {
  color: string;
};
