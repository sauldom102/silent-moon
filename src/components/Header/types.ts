import { ViewStyle } from 'react-native';

export type Props = {
  leftIcon: 'back' | 'close';
  onPressLeft?: () => void;
  leftButtonWithBorder?: boolean;
  leftIconBackgroundColor: string;
  leftIconColor: string;
  title?: string;
  rightIcon?: 'download';
  onPressRight?: () => void;
  secondRightIcon?: 'like';
  onPressSecondRight?: () => void;
  rightIconsBackgroundColor?: string;
  rightIconsColor?: string;
  style?: ViewStyle;
};

export type ContainerProps = {
  safeTop: number;
};
