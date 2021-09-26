import React, { FC, memo } from 'react';
import { Container, Image, Bottom, Title } from './styles';
import { Props } from './types';

const Item: FC<Props> = ({ title, image }) => (
  <Container>
    {image && <Image source={image} />}
    <Bottom>
      <Title>{title}</Title>
    </Bottom>
  </Container>
);

export default memo(Item);
