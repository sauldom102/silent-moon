import { ViewStyle } from 'react-native';

export type Props = {
  index: number;
  title: string;
  picked?: boolean;
  onPress?: (index: number) => void;
  style?: ViewStyle;
};

export type PickedProps = {
  picked: boolean;
};
