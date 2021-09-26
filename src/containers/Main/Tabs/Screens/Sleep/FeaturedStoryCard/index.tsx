import React, { FC, memo } from 'react';
import { Container, Image, Title, Subtitle, Button } from './styles';
import { Props } from './types';

const FeaturedStoryCard: FC<Props> = ({ title, subtitle, image, style }) => (
  <Container style={style}>
    <Image source={image} />
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    <Button title="Start" />
  </Container>
);

export default memo(FeaturedStoryCard);
