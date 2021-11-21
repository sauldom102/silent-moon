import React, { FC, memo } from 'react';
import { PanGestureHandler } from 'react-native-gesture-handler';
import useLogic from './logic';
import {
  Container,
  SelectorWrapper,
  Selector,
  Line,
  LineBackground,
} from './styles';
import { Props } from './types';

const PlayerBar: FC<Props> = ({ value, onChange, onPan, style }) => {
  const { selectorStyle, lineStyle, onGestureEvent, onLayout } = useLogic({
    value,
    onChange,
    onPan,
  });

  return (
    <Container style={style} onLayout={onLayout}>
      <LineBackground />
      <Line style={lineStyle} />
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <SelectorWrapper style={selectorStyle}>
          <Selector />
        </SelectorWrapper>
      </PanGestureHandler>
    </Container>
  );
};

export default memo(PlayerBar);
