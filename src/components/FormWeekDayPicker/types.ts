import { ViewStyle } from 'react-native';
import { Control } from 'react-hook-form';

export type Props = {
  name: string;
  control: Control<any>;
  style?: ViewStyle;
};
