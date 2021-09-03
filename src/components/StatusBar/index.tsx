import React, { FC, memo } from 'react';
import { StatusBar as BaseStatusBar } from './styles';
import { Props } from './types';

const StatusBar: FC<Props> = ({ light = false, ...props }) => (
  <BaseStatusBar
    barStyle={light ? 'light-content' : 'dark-content'}
    translucent
    {...props}
  />
);

export default memo(StatusBar);
