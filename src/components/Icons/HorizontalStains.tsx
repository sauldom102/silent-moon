import React, { FC, memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import { Props as IconProps } from './types';

type Props = IconProps & {
  leftColor?: string;
  topColor?: string;
  bottomColor?: string;
};

const HorizontalStains: FC<Props> = ({
  size = 375,
  leftColor = '#444359',
  topColor = 'rgba(155, 157, 180, 0.49)',
  bottomColor = '#6C71A1',
  style,
}) => (
  <Svg
    width={size}
    height={(size * 95) / 375}
    viewBox="0 0 375 95"
    style={style}
  >
    <Path
      d="M58.952 40.446C58.952 23.07 83.452 6.584 99 0H1v95h89.048c3.77-15.52-4.712-27.277-13.663-32.92-8.952-5.644-17.433-7.58-17.433-21.634z"
      fill={leftColor}
    />
    <Path
      d="M200.55 35.719C184.704 19.628 192.094 5.202 197.77 0H375v46.469c-40.659 43.694-67.765 11.79-70.197 3.814-2.433-7.976-4.865-35.025-43.091-11.79-38.227 23.234-41.354 17.339-61.162-2.774z"
      fill={topColor}
    />
    <Path
      d="M246.5 98c0 17.673-14.327 32-32 32-17.673 0-32-14.327-32-32-3.636-33.934 8.721-27.722 22.304-20.656 5.96 3.1 12.879 2.054 18.89-.944C243.788 66.377 246.5 82.442 246.5 98z"
      fill={bottomColor}
    />
  </Svg>
);

export default memo(HorizontalStains);
