import React, { FC, memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import { Props } from './types';

const ListenIcon: FC<Props> = ({ size = 21, color = '#7FD2F2', style }) => (
  <Svg width={size} height={(size * 17) / 21} viewBox="0 0 21 17" style={style}>
    <Path
      d="M20.941 11.333v3a2.5 2.5 0 01-2.5 2.5h-2c-.28 0-.5-.23-.5-.5v-7c0-.28.22-.5.5-.5h.5v-.01h1v.01h.5a2.5 2.5 0 012.5 2.5zM5.941 9.333v7c0 .27-.22.5-.5.5h-2a2.5 2.5 0 01-2.5-2.5v-3a2.5 2.5 0 012.5-2.5h.5v-.01h1v.01h.5c.28 0 .5.21.5.5z"
      fill={color}
    />
    <Path
      d="M17.941 7.813v1.01h-1v-1.01c0-3.31-2.69-6-6-6s-6 2.69-6 6v1.01h-1v-1.01c0-3.86 3.13-7 7-7s7 3.14 7 7z"
      fill={color}
      stroke={color}
      strokeWidth={0.25}
      strokeMiterlimit={10}
    />
  </Svg>
);

export default memo(ListenIcon);
