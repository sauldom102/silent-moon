import { View } from 'react-native';
import styled from 'styled-components/native';
import { Text } from 'components';

export const Container = styled(View)`
  border-bottom-width: 1px;
  border-bottom-color: #e4e6fd;
  overflow: hidden;
`;

export const Title = styled(Text).attrs({
  family: 'HelveticaNeue-Bold',
})`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.title};
  margin-left: 20px;
`;

export const Tabs = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;
