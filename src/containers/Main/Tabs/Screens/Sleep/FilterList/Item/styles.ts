import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'components';
import { ActiveProps } from './types';

export const Container = styled(TouchableOpacity)``;

export const Main = styled.View``;

export const Title = styled(Text).attrs<ActiveProps>({
  family: 'HelveticaNeue-Bold',
})<ActiveProps>`
  font-size: 30px;
  line-height: 41px;
  color: ${({ light }) => (light ? '#e6e7f2' : '#3F414E')};
  text-align: center;
`;
