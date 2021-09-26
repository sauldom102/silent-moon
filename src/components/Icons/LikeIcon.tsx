import React, { FC, memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import { Props as IconProps } from './types';

type Props = IconProps & {
  active?: boolean;
};

const LikeIcon: FC<Props> = ({
  size = 22,
  color = '#E6E7F2',
  active = false,
  style,
}) => (
  <Svg width={size} height={(size * 19) / 22} viewBox="0 0 22 19" style={style}>
    <Path
      d="M18.722 2.921c-1.878-1.99-4.917-1.99-6.795 0l-.149.158a1.068 1.068 0 01-1.563 0C8.582 1.338 5.962.894 4.032 2.264c-2.603 1.861-2.856 5.63-.751 7.861l.925.982 5.607 5.944a1.605 1.605 0 002.367 0l5.607-5.944.926-.982c1.886-1.99 1.886-5.213.009-7.204z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill={active ? color : undefined}
    />
  </Svg>
);

export default memo(LikeIcon);
