import React, { FC, memo } from 'react';
import { PauseIcon, PlayIcon } from 'components';
import { Container, Out, Main } from './styles';
import { Props } from './types';

const PlayButton: FC<Props> = ({
  onPress,
  playing = false,
  color = '#3F414E',
  style,
}) => (
  <Container onPress={onPress} style={style}>
    <Out color={color}>
      <Main color={color}>{playing ? <PauseIcon /> : <PlayIcon />}</Main>
    </Out>
  </Container>
);

export default memo(PlayButton);
