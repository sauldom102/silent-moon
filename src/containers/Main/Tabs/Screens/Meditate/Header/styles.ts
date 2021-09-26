import styled from 'styled-components/native';
import {
  TitleSubtitle as BaseTitleSubtitle,
  HorizontalMusicCard as BaseHorizontalMusicCard,
  FilterList as BaseFilterList,
} from 'components';

export const Container = styled.View`
  flex: 1;
  margin: 0 -20px;
`;

export const TitleSubtitle = styled(BaseTitleSubtitle).attrs({
  titleStyle: {
    fontSize: 28,
  },
})`
  margin: 0 20px;
`;

export const FilterList = styled(BaseFilterList)`
  margin-top: 34px;
`;

export const HorizontalMusicCard = styled(BaseHorizontalMusicCard).attrs({
  light: true,
})`
  margin: 20px;
`;
