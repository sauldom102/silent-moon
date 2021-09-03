import React, { FC } from 'react';
import { Container, Text } from './styles';
import { Props } from './types';

const Welcome: FC<Props> = () => (
  <Container>
    <Text>Welcome screen</Text>
  </Container>
);

export default Welcome;
