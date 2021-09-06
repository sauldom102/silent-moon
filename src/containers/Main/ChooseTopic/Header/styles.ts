import styled from 'styled-components/native';
import { Text as BaseText } from 'components';

export const Container = styled.View`
  padding-bottom: 30px;
`;

export const Title = styled(BaseText).attrs({
  family: 'HelveticaNeue-Light',
})`
  font-size: 28px;
  color: #3f414e;
`;

export const Highlight = styled(BaseText).attrs({
  family: 'HelveticaNeue-Bold',
})`
  font-size: 28px;
  color: #3f414e;
`;

export const Choose = styled(Title).attrs({
  family: 'HelveticaNeue-Light',
})`
  font-size: 20px;
  color: #a1a4b2;
  margin-top: 10px;
`;
