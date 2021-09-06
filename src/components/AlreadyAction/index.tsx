import React, { FC, memo } from 'react';
import TextButton from 'components/TextButton';
import { Container, Title } from './styles';
import { Props } from './types';

const AlreadyAction: FC<Props> = ({ action, onPress, style }) => (
  <Container style={style}>
    <Title>Already have an account?</Title>
    <TextButton title={action} onPress={onPress} />
  </Container>
);

export default memo(AlreadyAction);
