import { View, FlatList } from 'react-native';
import styled from 'styled-components/native';
import Text from 'components/Text';
import { Item } from './types';

export const Container = styled(View)``;

export const Title = styled(Text).attrs({
  family: 'HelveticaNeue-Medium',
})`
  font-size: 24px;
  color: #3f414e;
  margin-left: 20px;
`;

export const List = styled(FlatList as new () => FlatList<Item>).attrs({
  contentContainerStyle: {
    marginTop: 20,
  },
})``;

export const Separator = styled.View`
  width: 20px;
`;
