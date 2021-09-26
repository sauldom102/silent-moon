import { TextStyle, ViewStyle } from 'react-native';

export type Variant = 'primary' | 'secondary' | 'link' | 'facebook' | 'google';

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
  borderColor?: string;
  enabled: boolean;
};

export type TitleProps = {
  color: string;
};
