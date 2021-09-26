import React, { FC, memo } from 'react';
import { LikeIcon, ListenIcon } from 'components';
import { Container, Icon, Title } from './styles';
import { Props } from './types';

const LabeledIcon: FC<Props> = ({ icon, title, light = false, style }) => (
  <Container style={style}>
    <Icon>
      {icon === 'like' && (
        <LikeIcon color={light ? '#FF84A2' : '#E6E7F2'} size={18} active />
      )}
      {icon === 'listen' && (
        <ListenIcon color={light ? '#7FD2F2' : '#E6E7F2'} />
      )}
    </Icon>
    <Title light={light}>{title}</Title>
  </Container>
);

export default memo(LabeledIcon);
