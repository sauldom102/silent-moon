import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type ScreensParams = {
  Login: undefined;
  Home: undefined;
  Alerts: undefined;
  Discover: undefined;
  Feed: undefined;
};

export interface MainStackScreenProps<ScreenName extends keyof ScreensParams> {
  navigation: StackNavigationProp<ScreensParams, ScreenName>;
  route: RouteProp<ScreensParams, ScreenName>;
}

export type Props = {};
