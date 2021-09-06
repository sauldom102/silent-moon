import React, { FC, memo } from 'react';
import { Container } from './styles';
import { Props } from './types';

const Item: FC<Props> = ({ id, title, onPress }) => <Container />;

export default memo(Item);
