import React, { FC, memo } from 'react';
import { Container, Title, Subtitle } from './styles';
import { Props } from './types';

const TitleSubtitle: FC<Props> = ({
  title,
  subtitle,
  light = false,
  style,
  titleStyle,
}) => (
  <Container style={style}>
    <Title style={titleStyle}>{title}</Title>
    <Subtitle light={light}>{subtitle}</Subtitle>
  </Container>
);

export default memo(TitleSubtitle);
