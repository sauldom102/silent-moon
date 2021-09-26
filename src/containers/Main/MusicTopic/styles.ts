import styled from 'styled-components/native';
import { Header as BaseHeader, StoryList } from 'components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled(BaseHeader).attrs({
  leftIcon: 'back',
  leftIconBackgroundColor: '#1F265E',
  leftIconColor: '#E6E7F2',
})``;

export const List = styled(StoryList).attrs({
  light: true,
  type: 'vertical',
})`
  flex: 1;
`;
