import React, { FC, memo } from 'react';
import useLogic from './logic';
import { Container } from './styles';
import { Props } from './types';

const ScaleButton: FC<Props> = ({ children, style, ...props }) => {
  const { handlePressIn, handlePressOut, animatedStyle } = useLogic();

  return (
    <Container
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[style, animatedStyle]}
      {...props}
    >
      {children}
    </Container>
  );
};

export default memo(ScaleButton);
