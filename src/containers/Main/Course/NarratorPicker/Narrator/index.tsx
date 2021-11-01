import React, { FC, memo } from 'react';
import { useIdCallback } from 'utils';
import { Container, Button, Title, Line } from './styles';
import { Props } from './types';

const Narrator: FC<Props> = ({ id, title, onPress, selected = false }) => {
  const handlePress = useIdCallback(onPress, id);

  return (
    <Container>
      <Button onPress={handlePress}>
        <Title selected={selected}>{title}</Title>
      </Button>
      <Line selected={selected} />
    </Container>
  );
};

export default memo(Narrator);
