import React, { FC, memo } from 'react';
import { ITEMS } from './constants';
import Item from './Item';
import { Container } from './styles';
import { Props } from './types';

const WeekDayPicker: FC<Props> = ({ onPressDay, selectedDays = [], style }) => (
  <Container style={style}>
    {ITEMS.map((it, i) => (
      <Item
        key={it}
        index={i}
        title={it}
        picked={selectedDays.includes(i)}
        onPress={onPressDay}
      />
    ))}
  </Container>
);

export default memo(WeekDayPicker);
