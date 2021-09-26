import { Control } from 'react-hook-form';
import { Props as TextInputProps } from 'components/TextInput/types';

export type Props = TextInputProps & {
  name: string;
  control: Control<any>;
};
