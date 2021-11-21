import styled from 'styled-components/native';
import {
  SleepHeader,
  TitleSubtitle as BaseTitleSubtitle,
  FilterList as BaseFilterList,
} from 'components';
import FeaturedStoryCard from '../FeaturedStoryCard';
import { SafeProps } from './types';

export const Container = styled.View`
  margin: 0 -20px 20px;
`;

export const Safe = styled.View<SafeProps>`
  height: ${({ safeTop }) => safeTop + 66}px;
  background-color: #1f265e;
`;

export const TitleSubtitle = styled(BaseTitleSubtitle).attrs({
  light: true,
  titleStyle: {
    fontSize: 28,
  },
})`
  padding: 0 48px;
`;

export const Background = styled(SleepHeader).attrs<SafeProps>(({ theme }) => ({
  size: theme.device.width,
}))<SafeProps>`
  position: absolute;
  top: ${({ safeTop }) => safeTop + 20}px;
`;

export const FilterList = styled(BaseFilterList).attrs({
  light: true,
})`
  margin-top: 34px;
`;

export const FeaturedStory = styled(FeaturedStoryCard)`
  margin: 30px 20px 0;
`;
