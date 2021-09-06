import React, { FC, memo } from 'react';
import { Container, Title, Highlight, Choose } from './styles';
import { Props } from './types';

const Header: FC<Props> = () => (
  <Container>
    <Highlight>What Brings you</Highlight>
    <Title>to Silent Moon?</Title>
    <Choose>choose a topic to focuse on:</Choose>
  </Container>
);

export default memo(Header);
