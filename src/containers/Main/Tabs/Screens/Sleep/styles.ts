import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { ListProps } from './types';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const List = styled(
  FlatList as new () => FlatList<any>,
).attrs<ListProps>({
  contentContainerStyle: {},
})<ListProps>``;
