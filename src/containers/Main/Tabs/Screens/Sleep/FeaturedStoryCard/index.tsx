import React, { FC, memo } from 'react';
import { Container, Main, Image, Title, Subtitle, Button } from './styles';
import { Props } from './types';

const FeaturedStoryCard: FC<Props> = ({ title, subtitle, image, style }) => (
  <Container style={style}>
    <Main>
      <Image source={image} />
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
      <Button title="Start" />
    </Main>
  </Container>
);

export default memo(FeaturedStoryCard);
