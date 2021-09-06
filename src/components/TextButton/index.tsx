import React, { FC, memo } from 'react';
import { Container, Title } from './styles';
import { Props } from './types';

const TextButton: FC<Props> = ({ title, onPress, style }) => (
  <Container onPress={onPress} style={style}>
    <Title>{title}</Title>
  </Container>
);

export default memo(TextButton);
