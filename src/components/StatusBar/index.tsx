import React, { FC, memo, useEffect } from 'react';
import { StatusBar as StatusBarAPI } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
import { StatusBar as BaseStatusBar } from './styles';
import { Props } from './types';

const StatusBar: FC<Props> = ({ light = false, ...props }) => {
  const isFocused = useIsFocused();

  const barStyle = light ? 'light-content' : 'dark-content';

  useEffect(() => {
    if (isFocused) {
      StatusBarAPI.setBarStyle(barStyle);
    }
  }, [isFocused, barStyle]);

  return <BaseStatusBar barStyle={barStyle} translucent {...props} />;
};

export default memo(StatusBar);
