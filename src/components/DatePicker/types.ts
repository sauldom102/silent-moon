import { ViewStyle } from 'react-native';
import { DatePickerProps } from 'react-native-date-picker';

export type Props = Partial<
  Pick<DatePickerProps, 'mode' | 'date' | 'onDateChange'>
> & {
  style?: ViewStyle;
};
