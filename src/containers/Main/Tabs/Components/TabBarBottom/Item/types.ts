import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export type Props = {
  jumpTo: BottomTabBarProps['navigation']['navigate'];
  isFocused: boolean;
  routeName: string;
  routeKey: string;
};

export type LabelProps = {
  focused: boolean;
};
