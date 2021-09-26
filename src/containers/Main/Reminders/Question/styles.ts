import styled from 'styled-components/native';
import { Text } from 'components';

export const Container = styled.View``;

export const Title = styled(Text).attrs({
  family: 'HelveticaNeue-Bold',
})`
  font-size: 24px;
  line-height: 32px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Subtitle = styled(Text).attrs({
  family: 'HelveticaNeue-Light',
})`
  font-size: 16px;
  line-height: 26px;
  color: ${({ theme }) => theme.colors.subtitle};
  margin-top: 5px;
`;
