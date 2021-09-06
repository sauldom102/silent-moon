import React, { FC, memo, useCallback } from 'react';
import { Container, Main, Left, Stains, Title, Subtitle } from './styles';
import { Props } from './types';

const MusicCard: FC<Props> = ({
  id,
  title,
  topic,
  duration,
  onPress,
  style,
}) => {
  const handlePress = useCallback(() => {
    if (onPress) {
      onPress(id);
    }
  }, [onPress, id]);

  return (
    <Container onPress={handlePress} style={style}>
      <Main>
        <Stains />
        <Left>
          <Title>{title}</Title>
          <Subtitle>{`${topic} • ${duration}`}</Subtitle>
        </Left>
      </Main>
    </Container>
  );
};

export default memo(MusicCard);
