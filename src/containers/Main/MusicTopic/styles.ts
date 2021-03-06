import styled from 'styled-components/native';
import {
  Header as BaseHeader,
  StoryList,
  StatusBar as BaseStatusBar,
} from 'components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const StatusBar = styled(BaseStatusBar).attrs(({ theme }) => ({
  light: !!theme.isNightMode,
}))``;

export const Header = styled(BaseHeader).attrs(({ theme }) => ({
  leftIcon: 'back',
  leftIconBackgroundColor: theme.isNightMode ? '#1F265E' : '#f2f2f2',
  leftIconColor: theme.isNightMode ? '#E6E7F2' : '#3F414E',
}))``;

export const List = styled(StoryList).attrs({
  light: true,
  type: 'vertical',
})`
  flex: 1;
`;
