import { ViewStyle } from 'react-native';

export type Props = {
  title: string;
  subtitle: string;
  description?: string;
  favoritesNum?: number;
  listeningNum?: number;
  style?: ViewStyle;
};
