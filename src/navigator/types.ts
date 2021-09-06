import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type ScreensParams = {
  Front: undefined;
  Login: undefined;
  Home: undefined;
  Welcome: undefined;
  ChooseTopic: undefined;
  Sleep: undefined;
  SleepWelcome: undefined;
};

export interface MainStackScreenProps<ScreenName extends keyof ScreensParams> {
  navigation: StackNavigationProp<ScreensParams, ScreenName>;
  route: RouteProp<ScreensParams, ScreenName>;
}

export type Props = {};
