import React, { FC, memo, useState } from 'react';
import { Container, DatePicker as BaseDatePicker } from './styles';
import { Props } from './types';

const DatePicker: FC<Props> = ({ mode, date: d, onDateChange, style }) => {
  const [date, setDate] = useState(new Date());

  return (
    <Container style={style}>
      <BaseDatePicker
        date={d ?? date}
        onDateChange={onDateChange ?? setDate}
        mode={mode}
      />
    </Container>
  );
};

export default memo(DatePicker);
