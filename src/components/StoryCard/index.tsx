import React, { FC, memo, useCallback } from 'react';
import { Container, Main, Image, Title, Subtitle } from './styles';
import { Props } from './types';

const StoryCard: FC<Props> = ({
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
      onPress(id, topic);
    }
  }, [onPress, id, topic]);

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

export default memo(StoryCard);
