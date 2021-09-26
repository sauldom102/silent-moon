import React, { FC, memo } from 'react';
import { Container, Main } from './styles';
import { Props } from './types';

const PasswordButton: FC<Props> = ({ onPress, style }) => (
  <Container onPress={onPress} style={style}>
    <Main>{null}</Main>
  </Container>
);

export default memo(PasswordButton);
