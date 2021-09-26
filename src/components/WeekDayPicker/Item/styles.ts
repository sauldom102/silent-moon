import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import Text from 'components/Text';
import { PickedProps } from './types';

export const Container = styled(BorderlessButton)<PickedProps>`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border-width: 1px;
  border-color: ${({ picked }) => (picked ? '#3F414E' : '#A1A4B2')};
  background-color: ${({ theme, picked }) =>
    picked ? '#3F414E' : theme.colors.white};
  justify-content: center;
  align-items: center;
`;

export const Title = styled(Text).attrs<PickedProps>({
  family: 'HelveticaNeue-Medium',
})<PickedProps>`
  font-size: 14px;
  color: ${({ theme, picked }) => (picked ? theme.colors.white : '#A1A4B2')};
`;
