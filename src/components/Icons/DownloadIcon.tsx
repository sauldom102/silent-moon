import React, { FC, memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import { Props } from './types';

const DownloadIcon: FC<Props> = ({ size = 20, color = '#E6E7F2', style }) => (
  <Svg width={size} height={(size * 21) / 20} viewBox="0 0 20 21" style={style}>
    <Path
      d="M15 7.75l-5 5-5-5m5 3.8V1.25m-9 12.5v4c0 1.1.9 2 2 2h14a2 2 0 002-2v-4H1z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(DownloadIcon);
