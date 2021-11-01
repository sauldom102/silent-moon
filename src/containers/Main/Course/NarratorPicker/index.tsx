import React, { FC, memo } from 'react';
import Narrator from './Narrator';
import { Container, Title, Tabs } from './styles';
import { Props } from './types';

const NarratorPicker: FC<Props> = ({ style }) => (
  <Container style={style}>
    <Title>Pick a Narrator</Title>
    <Tabs>
      <Narrator id="male" title="Male Voice" selected />
      <Narrator id="female" title="Female Voice" />
    </Tabs>
  </Container>
);

export default memo(NarratorPicker);
