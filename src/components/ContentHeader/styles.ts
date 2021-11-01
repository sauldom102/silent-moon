import { View } from 'react-native';
import styled from 'styled-components/native';
import Text from 'components/Text';
import BaseLabeledIcon from './LabeledIcon';

export const Container = styled(View)`
  padding: 0 20px;
`;

export const Title = styled(Text).attrs({
  family: 'HelveticaNeue-Bold',
})`
  font-size: 34px;
  line-height: 42px;
  color: ${({ theme }) => theme.colors.title};
`;

export const Subtitle = styled(Text).attrs({
  family: 'HelveticaNeue-Medium',
})`
  font-size: 14px;
  line-height: 15px;
  letter-spacing: 0.7px;
  color: ${({ theme }) => theme.colors.subtitle};
  text-transform: uppercase;
  margin-top: 16px;
`;

export const Description = styled(Text).attrs({
  family: 'HelveticaNeue-Light',
})`
  font-size: 16px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.subtitle};
  margin-top: 20px;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 30px;
`;

export const LabeledIcon = styled(BaseLabeledIcon)`
  margin-right: 40px;
`;
