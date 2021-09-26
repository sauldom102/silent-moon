import { View, FlatList, FlatListProps } from 'react-native';
import styled from 'styled-components/native';
import Text from 'components/Text';
import { Item } from './types';

export const Container = styled(View)``;

export const Title = styled(Text).attrs({
  family: 'HelveticaNeue-Medium',
})`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.title};
  margin-left: 20px;
  margin-bottom: 20px;
`;

export const List = styled(FlatList as new () => FlatList<Item>).attrs({
  indicatorStyle: 'white' as FlatListProps<Item>['indicatorStyle'],
})``;

export const HSeparator = styled.View`
  width: 20px;
`;

export const VSeparator = styled.View`
  height: 20px;
`;
