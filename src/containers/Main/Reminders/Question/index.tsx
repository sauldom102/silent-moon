import React, { FC, memo } from 'react';
import { Container, Title, Subtitle } from './styles';
import { Props } from './types';

const Question: FC<Props> = ({ title, subtitle }) => (
  <Container>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </Container>
);

export default memo(Question);
