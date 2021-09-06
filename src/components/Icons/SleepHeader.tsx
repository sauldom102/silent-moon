import React, { FC, memo } from 'react';
import { Svg, Circle, Path } from 'react-native-svg';
import { Props } from './types';

const SleepHeader: FC<Props> = ({ size = 415, style }) => (
  <Svg
    width={size}
    height={(size * 256) / 415}
    viewBox="0 0 415 256"
    style={style}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M.096 98.17c-29.113 12.543-49.494 41.495-49.494 75.208 0 45.207 36.648 81.854 81.854 81.854 27.474 0 51.786-13.535 66.632-34.3a57.563 57.563 0 0015.741 2.18c19.977 0 37.575-10.186 47.883-25.649 7.566 8.13 18.362 13.216 30.345 13.216 16.199 0 30.227-9.294 37.044-22.84 11.335 6.616 24.522 10.406 38.593 10.406 25.67 0 48.394-12.615 62.31-31.983a53.966 53.966 0 0014.364 1.935c8.455 0 16.455-1.947 23.576-5.418 7.849 13.758 22.655 23.033 39.628 23.033 25.178 0 45.589-20.412 45.589-45.59 0-23.309-17.492-42.532-40.065-45.259V-20h-414V98.17zm165.546 39.98h-.274l.089.164.185-.164z"
      fill="#1F265E"
    />
    <Circle cx={74.154} cy={39.63} r={25.37} fill="#D3D4DE" />
    <Circle cx={65.392} cy={27.926} r={4.657} fill="#C5C6D0" />
    <Circle cx={84.623} cy={39.416} r={6.752} fill="#F1F1F3" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M92.984 56.633c-3 3.32-6.866 5.843-11.241 7.213a6.752 6.752 0 0111.242-7.213z"
      fill="#C5C6D0"
    />
    <Circle cx={68.411} cy={55.624} r={3.019} fill="#C5C6D0" />
    <Circle cx={91.375} cy={30.255} r={25.37} fill="#1F265E" />
    <Path
      d="M25.57 73.93s1.371 7.133 7.52 5.518c0 0-5.158 3.95-3.177 8.622 0 0-2.352-5.285-7.643-5.026 0 0 4.55-1.488 3.3-9.115z"
      fill="#FCFCFC"
    />
    <Path
      d="M363.836 21.198s1.372 7.134 7.521 5.518c0 0-5.158 3.951-3.177 8.622 0 0-2.352-5.285-7.643-5.026 0 0 4.55-1.488 3.299-9.114zM25.792 134.167s.94 4.886 5.15 3.779c0 0-3.532 2.707-2.176 5.906 0 0-1.61-3.62-5.234-3.442 0 0 3.116-1.02 2.26-6.243z"
      fill="#6D75B0"
    />
    <Path
      d="M386.179 72.184s-4.208 2.151-2.083 5.7c0 0-3.404-2.507-5.964-.422 0 0 2.876-2.428 1.754-5.686 0 0 1.755 2.572 6.293.408z"
      fill="#fff"
    />
    <Path
      d="M39.119 124.148s.94 4.886 5.15 3.78c0 0-3.532 2.706-2.175 5.905 0 0-1.611-3.62-5.235-3.442 0 0 3.116-1.02 2.26-6.243zM406.051 103.832s-4.208 2.151-2.083 5.699c0 0-3.405-2.506-5.964-.421 0 0 2.876-2.428 1.754-5.686 0 0 1.755 2.572 6.293.408z"
      fill="#6D75B0"
    />
  </Svg>
);

export default memo(SleepHeader);
