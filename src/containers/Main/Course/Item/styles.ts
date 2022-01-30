import styled from 'styled-components/native';
import { Text, ScaleButton } from 'components';

export const Container = styled(ScaleButton)`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
`;

export const Main = styled.View`
  margin-left: 20px;
`;

export const Title = styled(Text).attrs({
  family: 'HelveticaNeue-Medium',
})`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Subtitle = styled(Text).attrs({
  family: 'HelveticaNeue-Medium',
})`
  font-size: 11px;
  letter-spacing: 0.7px;
  color: ${({ theme }) => theme.colors.subtitle};
  text-transform: uppercase;
  margin-top: 6px;
`;
