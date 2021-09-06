import React, { FC, memo } from 'react';
import {
  HomeIcon,
  MeditateIcon,
  MusicIcon,
  ProfileIcon,
  SleepIcon,
} from 'components';
import { colors } from 'theme';
import { Container } from './styles';
import { Props } from './types';

const Icon: FC<Props> = ({ icon, focused }) => {
  const color = focused ? colors.white : '#A0A3B1';
  return (
    <Container focused={focused}>
      {icon === 'Home' && <HomeIcon color={color} />}
      {icon === 'Sleep' && <SleepIcon color={color} />}
      {icon === 'Meditate' && <MeditateIcon color={color} />}
      {icon === 'Music' && <MusicIcon color={color} />}
      {icon === 'Profile' && <ProfileIcon color={color} />}
    </Container>
  );
};

export default memo(Icon);
