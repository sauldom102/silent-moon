import React, { FC, memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import { Props } from './types';

const PlayIcon: FC<Props> = ({ size = 20, color = '#F6F1FB', style }) => (
  <Svg width={size} height={(size * 22) / 20} viewBox="0 0 20 22" style={style}>
    <Path
      d="M18.48 8.316L4.557.404C2.531-.744 0 .694 0 2.989v15.834c0 2.307 2.53 3.744 4.557 2.586l13.923-7.912c2.027-1.148 2.027-4.023 0-5.181z"
      fill={color}
    />
  </Svg>
);

export default memo(PlayIcon);
