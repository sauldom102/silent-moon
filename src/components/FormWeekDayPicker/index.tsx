import React, { FC, memo } from 'react';
import WeekDayPicker from 'components/WeekDayPicker';
import useLogic from './logic';
import { Props } from './types';

const FormWeekDayPicker: FC<Props> = ({ name, control, style }) => {
  const { selectedDays, handlePressDay } = useLogic({
    name,
    control,
  });

  return (
    <WeekDayPicker
      selectedDays={selectedDays}
      onPressDay={handlePressDay}
      style={style}
    />
  );
};

export default memo(FormWeekDayPicker);
