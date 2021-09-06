import React, { FC, memo } from 'react';
import range from 'lodash/range';
import { Container, Circle } from './styles';
import { Props } from './types';

const Pulse: FC<Props> = ({
  circles,
  smallCircleSize,
  increaseCircleSize,
  style,
}) => {
  const size = smallCircleSize + increaseCircleSize * circles;

  return (
    <Container size={size} style={style}>
      {range(circles).map((c) => (
        <Circle
          key={`${c}`}
          index={c}
          size={smallCircleSize + c * increaseCircleSize}
          total={circles}
        />
      ))}
    </Container>
  );
};

export default memo(Pulse);
