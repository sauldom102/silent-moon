import React, { FC, memo, useCallback } from 'react';
import { Container, Main, Image, Title, Subtitle } from './styles';
import { Props } from './types';

const MusicCard: FC<Props> = ({
  id,
  image,
  title,
  topic,
  color,
  duration,
  onPress,
}) => {
  const handlePress = useCallback(() => {
    if (onPress) {
      onPress(id);
    }
  }, [onPress, id]);

  return (
    <Container onPress={handlePress}>
      <Main>
        <Image source={image} color={color} />
        <Title>{title}</Title>
        <Subtitle>{`${topic} • ${duration}`}</Subtitle>
      </Main>
    </Container>
  );
};

export default memo(MusicCard);
