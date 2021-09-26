import { View } from 'react-native';
import styled from 'styled-components/native';
import IconButton from 'components/IconButton';
import Text from 'components/Text';
import { ContainerProps } from './types';

export const Container = styled(View)<ContainerProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${({ safeTop }) => safeTop + 12}px 20px 8px;
`;

export const Right = styled.View`
  flex-direction: row;
  align-items: center;
  min-width: 55px;
`;

export const SecondRightIconButton = styled(IconButton)`
  margin-right: 15px;
`;

export const Title = styled(Text).attrs({
  family: 'HelveticaNeue-Bold',
})`
  font-size: 24px;
  color: #e6e7f2;
`;
