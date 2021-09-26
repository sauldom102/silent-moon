import React, { FC, memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import { Props } from '../types';

const SadFaceIcon: FC<Props> = ({ size = 26, color = '#E6E7F2', style }) => (
  <Svg width={size} height={(size * 25) / 26} viewBox="0 0 26 25" style={style}>
    <Path
      d="M13.346 23.882c6.276 0 11.363-5.087 11.363-11.363S19.622 1.155 13.346 1.155 1.982 6.243 1.982 12.52c0 6.276 5.088 11.363 11.364 11.363z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M17.891 17.064s-1.704-2.273-4.545-2.273S8.8 17.064 8.8 17.064"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.937 9.11h.011M16.755 9.11h.011"
      stroke={color}
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(SadFaceIcon);
