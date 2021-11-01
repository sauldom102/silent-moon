import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type PlayOptionParams = {
  id: string;
};

type MusicPlayerParams = {
  id: string;
  type: 'meditation' | 'story' | 'courseMusic';
};

type MusicTopicParams = {
  id: string;
};

type CourseParams = {
  id: string;
};

export type ScreensParams = {
  Front: undefined;
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  Welcome: undefined;
  ChooseTopic: undefined;
  Sleep: undefined;
  SleepWelcome: undefined;
  Meditate: undefined;
  PlayOption: PlayOptionParams;
  Reminders: undefined;
  MusicPlayer: MusicPlayerParams;
  MusicTopic: MusicTopicParams;
  Course: CourseParams;
};

export interface MainStackScreenProps<ScreenName extends keyof ScreensParams> {
  navigation: StackNavigationProp<ScreensParams, ScreenName>;
  route: RouteProp<ScreensParams, ScreenName>;
}

export type Props = {};
