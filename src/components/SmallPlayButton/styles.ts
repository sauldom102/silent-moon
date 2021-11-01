import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { MainProps } from './types';

export const Container = styled(BorderlessButton)`
  border-radius: 20px;
`;

export const Main = styled.View<MainProps>`
  width: 40px;
  aspect-ratio: 1;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  border: 1px solid ${({ color, borderColor }) => borderColor ?? color};
`;
