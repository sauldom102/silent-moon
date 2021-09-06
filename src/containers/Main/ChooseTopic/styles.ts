import styled from 'styled-components/native';
import BaseFlatGrid from 'react-native-json-grid-list';
import { FlatGridProps } from './types';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const FlatGrid = styled(BaseFlatGrid).attrs<FlatGridProps>(
  ({ safeTop, safeBottom }) => ({
    rowSeparator: 20,
    contentContainerStyle: {
      paddingTop: 20 + safeTop,
      paddingHorizontal: 20,
      paddingBottom: 20 + safeBottom,
    },
  }),
)<FlatGridProps>``;
