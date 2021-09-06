import { View } from 'react-native';
import styled from 'styled-components/native';
import Text from 'components/Text';

export const Container = styled(View)`
  flex-direction: row;
  align-items: center;
`;

export const Title = styled(Text).attrs({
  family: 'HelveticaNeue-Medium',
})`
  color: #a1a4b2;
  letter-spacing: 0.7px;
  text-transform: uppercase;
`;
