import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import TextBase from 'components/Text';

export const Container = styled(BorderlessButton).attrs(({ theme }) => ({
  rippleColor: theme.colors.primary,
  borderless: false,
}))`
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export const Title = styled(TextBase).attrs({
  family: 'HelveticaNeue-Medium',
})`
  color: ${({ theme }) => theme.colors.primary};
  letter-spacing: 0.7px;
  text-transform: uppercase;
`;
