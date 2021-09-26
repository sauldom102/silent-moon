import { useController } from 'react-hook-form';
import { Props } from './types';

const useLogic = ({ control, name }: Props) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });

  return {
    onDateChange: onChange,
    date: value,
  };
};

export default useLogic;
