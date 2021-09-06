import React, { FC, memo } from 'react';
import { Container, Image, Title } from './styles';
import { Props } from './types';

const Item: FC<Props> = ({
  title,
  titleColor,
  image,
  imageHeight,
  imageTopSpacing = 0,
  imageHorizontalSpacing = 0,
}) => (
  <Container>
    {image && (
      <Image
        source={image}
        height={imageHeight}
        topSpacing={imageTopSpacing}
        horizontalSpacing={imageHorizontalSpacing}
      />
    )}
    <Title color={titleColor}>{title}</Title>
  </Container>
);

export default memo(Item);
