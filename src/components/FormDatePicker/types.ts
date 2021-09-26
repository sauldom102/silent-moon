import { ViewStyle } from 'react-native';
import { Control } from 'react-hook-form';
import { DatePickerProps } from 'react-native-date-picker';

export type Props = {
  name: string;
  control: Control<any>;
  mode?: DatePickerProps['mode'];
  style?: ViewStyle;
};
