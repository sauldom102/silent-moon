import React, { FC, memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import { Props } from './types';

const BackIcon: FC<Props> = ({ size = 20, color = '#E6E7F2', style }) => (
  <Svg width={size} height={(size * 19) / 20} viewBox="0 0 20 19" style={style}>
    <Path
      d="M19.538 10.5H4.262l6.412 6.589L9.298 18.5l-8.23-8.433a.806.806 0 010-1.123L9.298.5l1.376 1.411L4.262 8.5h15.276v2z"
      fill={color}
    />
  </Svg>
);

export default memo(BackIcon);
