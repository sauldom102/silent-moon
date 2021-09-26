import React, { FC, memo } from 'react';
import { useIdCallback } from 'utils';
import { Container, Title } from './styles';
import { Props } from './types';

const Item: FC<Props> = ({ index, title, picked = false, onPress, style }) => {
  const handlePress = useIdCallback(onPress, index);

  return (
    <Container picked={picked} onPress={handlePress} style={style}>
      <Title picked={picked}>{title}</Title>
    </Container>
  );
};

export default memo(Item);
