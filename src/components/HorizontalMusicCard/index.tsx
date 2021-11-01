import React, { FC, memo } from 'react';
import { useIdCallback } from 'utils';
import {
  Container,
  Main,
  Left,
  Stains,
  Title,
  Subtitle,
  PlayButton,
} from './styles';
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
  const handlePress = useIdCallback(onPress, id);

  return (
    <Container onPress={handlePress} style={style}>
      <Main light={light}>
        <Stains light={light} />
        <Left>
          <Title light={light}>{title}</Title>
          <Subtitle light={light}>{`${topic} • ${duration}`}</Subtitle>
        </Left>
        <PlayButton enabled={false} />
      </Main>
    </Container>
  );
};

export default memo(MusicCard);
