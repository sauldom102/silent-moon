import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { Item } from './types';

export const List = styled(FlatList as new () => FlatList<Item>)``;

export const Separator = styled.View`
  width: 20px;
`;
