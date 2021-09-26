import { useCallback } from 'react';
import isArray from 'lodash/isArray';
import { useController } from 'react-hook-form';
import { Props } from './types';

const useLogic = ({ control, name }: Props) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
  });

  const handlePressDay = useCallback(
    (day: number) => {
      const days = isArray(value) ? value : [];
      onChange(
        days.includes(day) ? days.filter((d) => d !== day) : [...days, day],
      );
    },
    [value, onChange],
  );

  return {
    selectedDays: value,
    handlePressDay,
  };
};

export default useLogic;
