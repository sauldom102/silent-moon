import styled from 'styled-components/native';
import { StoryList } from 'components';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const List = styled(StoryList).attrs({
  light: true,
  type: 'vertical',
})``;
