import React, { FC, memo, useCallback } from 'react';
import { Container, Main, Left, Stains, Title, Subtitle } from './styles';
import { Props } from './types';

const MusicCard: FC<Props> = ({
  id,
  title,
  topic,
  duration,
  onPress,
  light = false,
  style,
}) => {
  const handlePress = useCallback(() => {
    if (onPress) {
      onPress(id);
    }
  }, [onPress, id]);

  return (
    <Container onPress={handlePress} style={style}>
      <Main light={light}>
        <Stains light={light} />
        <Left>
          <Title light={light}>{title}</Title>
          <Subtitle light={light}>{`${topic} • ${duration}`}</Subtitle>
        </Left>
      </Main>
    </Container>
  );
};

export default memo(MusicCard);
