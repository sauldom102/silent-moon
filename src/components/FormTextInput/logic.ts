import { useController } from 'react-hook-form';
import { Props } from './types';

const useLogic = ({ control, name }: Props) => {
  const {
    field: { value, onChange, onBlur },
    fieldState: { error },
    formState: { touchedFields },
  } = useController({
    name,
    control,
  });

  const touched = Object.keys(touchedFields).includes(name);

  return {
    error: touched ? error : undefined,
    onChangeText: onChange,
    onBlur,
    value,
  };
};

export default useLogic;
