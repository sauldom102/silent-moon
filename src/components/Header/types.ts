import { ViewStyle } from 'react-native';

export type Props = {
  leftIcon?: 'back' | 'close';
  onPressLeft?: () => void;
  leftButtonWithBorder?: boolean;
  leftIconBackgroundColor?: string;
  leftIconColor?: string;
  title?: string;
  rightIcon?: 'download' | 'info';
  onPressRight?: () => void;
  secondRightIcon?: 'like';
  onPressSecondRight?: () => void;
  rightIconsBackgroundColor?: string;
  rightIconsColor?: string;
  onHeight?: (height: number) => void;
  style?: ViewStyle;
};

export type ContainerProps = {
  safeTop: number;
};
