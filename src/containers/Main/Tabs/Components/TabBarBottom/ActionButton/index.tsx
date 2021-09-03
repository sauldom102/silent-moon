import React, { FC, memo } from 'react';
import { Container, Content, Icon } from './styles';
import { Props } from './types';

const TabBarBottomActionButton: FC<Props> = ({ onPress }) => (
  <Container>
    <Content onPress={onPress}>
      <Icon />
    </Content>
  </Container>
);

export default memo(TabBarBottomActionButton);
