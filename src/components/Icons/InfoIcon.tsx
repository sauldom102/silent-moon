import React, { FC, memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import { Props } from './types';

const InfoIcon: FC<Props> = ({ size = 28, color = '#E6E7F2', style }) => (
  <Svg width={size} height={size} viewBox="0 0 28 28" style={style}>
    <Path
      d="M14.001.666a13.333 13.333 0 1 0 0 26.666 13.333 13.333 0 0 0 0-26.666Zm0 24a10.667 10.667 0 1 1 0-21.334 10.667 10.667 0 0 1 0 21.334Z"
      fill={color}
    />
    <Path
      d="M14.001 9.999a1.333 1.333 0 1 0 0-2.667 1.333 1.333 0 0 0 0 2.667ZM14.001 11.332a1.333 1.333 0 0 0-1.333 1.333v6.667a1.333 1.333 0 1 0 2.667 0v-6.667A1.333 1.333 0 0 0 14 11.332Z"
      fill={color}
    />
  </Svg>
);

export default memo(InfoIcon);
