import React, { FC, memo } from 'react';
import DatePicker from 'components/DatePicker';
import useLogic from './logic';
import { Props } from './types';

const FormDatePicker: FC<Props> = ({ name, control, mode, style }) => {
  const { date, onDateChange } = useLogic({
    name,
    control,
  });

  return (
    <DatePicker
      date={date}
      onDateChange={onDateChange}
      mode={mode}
      style={style}
    />
  );
};

export default memo(FormDatePicker);
