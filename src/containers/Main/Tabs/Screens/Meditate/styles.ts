import styled from 'styled-components/native';
import BaseFlatGrid from 'react-native-json-grid-list';
import {
  TitleSubtitle as BaseTitleSubtitle,
  HorizontalMusicCard as BaseHorizontalMusicCard,
  FilterList as BaseFilterList,
} from 'components';
import { FlatGridProps } from './types';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Main = styled.View`
  padding: 0 20px;
`;

export const TitleSubtitle = styled(BaseTitleSubtitle).attrs({
  titleStyle: {
    fontSize: 28,
  },
})``;

export const FilterList = styled(BaseFilterList)`
  margin-top: 34px;
`;

export const HorizontalMusicCard = styled(BaseHorizontalMusicCard).attrs({
  light: true,
})`
  margin-top: 20px;
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
