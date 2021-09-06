import React, { FC, memo, useEffect } from 'react';
import {
  useAnimatedStyle,
  withSequence,
  withTiming,
  withRepeat,
  useSharedValue,
} from 'react-native-reanimated';
import { Round } from './styles';
import { Props } from './types';

const Circle: FC<Props> = ({ index, size, total, style }) => {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withSequence(
        withTiming(1.25, {
          duration: 3000,
        }),
        withTiming(1, {
          duration: 2000,
        }),
      ),
      -1,
      true,
    );
  }, [scale]);

  const animatedStyle = useAnimatedStyle(
    () => ({
      transform: [
        {
          scale: scale.value,
        },
      ],
      opacity: Math.max(1 / total, 1 - index * (1 / (total - 1))),
    }),
    [index, scale, total],
  );

  return (
    <Round size={size} style={style ? [style, animatedStyle] : animatedStyle} />
  );
};

export default memo(Circle);
