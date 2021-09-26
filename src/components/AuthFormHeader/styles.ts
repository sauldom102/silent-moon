import styled from 'styled-components/native';
import BaseButton from 'components/Button';
import Text from 'components/Text';

export const Container = styled.View``;

export const Title = styled(Text).attrs({
  family: 'HelveticaNeue-Bold',
})`
  font-size: 28px;
  line-height: 38px;
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
  margin-bottom: 13px;
`;

export const Button = styled(BaseButton)`
  margin-top: 20px;
`;

export const Subtitle = styled(Text).attrs({
  family: 'HelveticaNeue-Bold',
})`
  font-size: 14px;
  letter-spacing: 0.7px;
  text-transform: uppercase;
  color: #a1a4b2;
  text-align: center;
  margin-top: 40px;
`;
