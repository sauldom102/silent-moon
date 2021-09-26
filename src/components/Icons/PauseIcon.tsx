import React, { FC, memo } from 'react';
import { Svg, Rect } from 'react-native-svg';
import { Props } from './types';

const PauseIcon: FC<Props> = ({ size = 20, color = '#FBFBFB', style }) => (
  <Svg width={size} height={(size * 25) / 20} viewBox="0 0 20 25" style={style}>
    <Rect
      x={0.01}
      y={0.06}
      width={6.82}
      height={24.916}
      rx={3.41}
      fill={color}
    />
    <Rect
      x={13.171}
      y={0.06}
      width={6.82}
      height={24.916}
      rx={3.41}
      fill={color}
    />
  </Svg>
);

export default memo(PauseIcon);
