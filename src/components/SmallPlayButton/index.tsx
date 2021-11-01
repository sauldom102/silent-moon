import React, { FC, memo } from 'react';
import { PauseIcon, PlayIcon } from 'components/Icons';
import { Container, Main } from './styles';
import { Props } from './types';
import { COLORS } from './utils';

const PlayButton: FC<Props> = ({
  onPress,
  playing = false,
  variant = 'light',
  enabled = true,
  style,
}) => {
  const { bgColor, iconColor, borderColor } = COLORS[variant];

  return (
    <Container onPress={onPress} enabled={enabled} style={style}>
      <Main color={bgColor} borderColor={borderColor}>
        {playing ? (
          <PauseIcon size={11} color={iconColor} />
        ) : (
          <PlayIcon size={11} color={iconColor} />
        )}
      </Main>
    </Container>
  );
};

export default memo(PlayButton);
