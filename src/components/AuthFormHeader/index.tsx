import React, { FC, memo } from 'react';
import { Container, Title, Button, Subtitle } from './styles';
import { Props } from './types';

const AuthFormHeader: FC<Props> = ({ title, subtitle }) => (
  <Container>
    <Title>{title}</Title>
    <Button title="Continue with Facebook" variant="facebook" />
    <Button title="Continue with Google" variant="google" />
    <Subtitle>{subtitle}</Subtitle>
  </Container>
);

export default memo(AuthFormHeader);
