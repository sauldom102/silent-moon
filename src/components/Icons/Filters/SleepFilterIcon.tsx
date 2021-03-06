import React, { FC, memo } from 'react';
import { Svg, Path } from 'react-native-svg';
import { Props } from '../types';

const SleepFilterIcon: FC<Props> = ({
  size = 28,
  color = '#E6E7F2',
  style,
}) => (
  <Svg width={size} height={(size * 25) / 28} viewBox="0 0 28 25" style={style}>
    <Path
      d="M23.774 13.573c-.574 6.179-6.04 10.722-12.219 10.148C5.377 23.147.834 17.68 1.408 11.5A11.23 11.23 0 0111.555 1.355c-2.87 3.882-2.047 9.349 1.835 12.22a8.764 8.764 0 0010.384 0z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.68 8.656a.59.59 0 00-.424-.125h-2.31L19.12 6.11l.212-.225.125-.162c.037-.05.062-.112.087-.162a.517.517 0 00.037-.2.428.428 0 00-.2-.4 1.13 1.13 0 00-.573-.112h-2.721a.587.587 0 00-.4.125c-.1.075-.15.2-.15.324 0 .188.063.3.188.35.174.05.362.075.549.062h1.76c-.075.1-.163.225-.287.362l-.45.512-.599.674-.686.786a9.82 9.82 0 00-.487.562.516.516 0 00.05.686c.15.113.324.163.5.15h3.194c.15.013.3-.037.425-.125a.453.453 0 00.137-.324c0-.137-.05-.25-.15-.337zM26.895 4.787a.732.732 0 00-.525-.163h-2.908l2.721-3.032.25-.288.162-.2a.693.693 0 00.112-.211.56.56 0 00.05-.25.507.507 0 00-.25-.5 1.869 1.869 0 00-.736-.124h-3.407a.72.72 0 00-.5.15.505.505 0 00-.174.412c0 .237.075.374.237.424.225.062.45.087.686.087h2.197a6.364 6.364 0 01-.362.45l-.574.649-.749.823L22.24 4c-.312.35-.512.575-.6.687a.655.655 0 00.063.886.98.98 0 00.637.187h4.006c.2.025.387-.025.55-.137.112-.1.187-.25.174-.412a.508.508 0 00-.174-.424z"
      fill={color}
    />
  </Svg>
);

export default memo(SleepFilterIcon);
