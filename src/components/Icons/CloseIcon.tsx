import React, { FC, memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import { Props } from './types';

const CloseIcon: FC<Props> = ({ size = 18, color = '#E6E7F2', style }) => (
  <Svg width={size} height={(size * 17) / 18} viewBox="0 0 18 17" style={style}>
    <Path
      d="M2.066 15.357L15.74 1.685M2.235 1.642l13.698 13.699L2.235 1.642z"
      stroke={color}
      strokeWidth={2.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default memo(CloseIcon);
