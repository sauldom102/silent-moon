import React, { FC, memo } from 'react';
import { colors } from 'theme';
import { Container, Title } from './styles';
import { Props } from './types';

const TextButton: FC<Props> = ({
  title,
  onPress,
  color = colors.primary,
  style,
}) => (
  <Container onPress={onPress} color={color} style={style}>
    <Title color={color}>{title}</Title>
  </Container>
);

export default memo(TextButton);
