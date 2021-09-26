import { ViewStyle } from 'react-native';

export type Props = {
  onPressDay?: (index: number) => void;
  selectedDays?: number[];
  style?: ViewStyle;
};
