import React, { FC, memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import { Props } from '../types';

const HeartIcon: FC<Props> = ({ size = 29, color = '#E6E7F2', style }) => (
  <Svg width={size} height={(size * 25) / 29} viewBox="0 0 29 25" style={style}>
    <Path
      d="M25.404 3.375c-2.628-2.765-6.883-2.765-9.512 0l-.208.219c-.6.63-1.577.63-2.189 0C11.21 1.176 7.541.559 4.84 2.462 1.195 5.047.84 10.282 3.787 13.38l1.296 1.364L12.933 23a2.259 2.259 0 003.313 0l7.85-8.256 1.296-1.364c2.641-2.764 2.641-7.24.012-10.005z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(HeartIcon);
