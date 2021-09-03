import React, { FC, memo } from 'react';
import { PlusIcon } from 'components/Icons';
import theme from 'theme';
import { Props } from './types';

const Icon: FC<Props> = ({ icon, focused }) => {
  const color = focused ? theme.colors.red : theme.colors.black;
  return (
    <>
      {icon === 'Home' && <PlusIcon color={color} />}
      {icon === 'Feed' && <PlusIcon color={color} />}
      {icon === 'Alerts' && <PlusIcon color={color} />}
      {icon === 'Discover' && <PlusIcon color={color} />}
    </>
  );
};

export default memo(Icon);
