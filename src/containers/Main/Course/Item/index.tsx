import React, { FC, memo } from 'react';
import { SmallPlayButton } from 'components';
import { useIdCallback } from 'utils';
import { Container, Main, Title, Subtitle } from './styles';
import { Props } from './types';

const Item: FC<Props> = ({
  id,
  title,
  subtitle,
  playing = false,
  onPressPlay,
}) => {
  const handlePressPlay = useIdCallback(onPressPlay, id);

  return (
    <Container onPress={handlePressPlay}>
      <SmallPlayButton playing={playing} variant="secondary" enabled={false} />
      <Main>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </Main>
    </Container>
  );
};

export default memo(Item);
