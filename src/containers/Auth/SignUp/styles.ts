import styled from 'styled-components/native';
import {
  Header as BaseHeader,
  FormTextInput,
  Button as BaseButton,
  AuthBgPattern,
} from 'components';
import { BodyProps } from './types';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Background = styled(AuthBgPattern)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
`;

export const Header = styled(BaseHeader).attrs(({ theme }) => ({
  leftIconBackgroundColor: theme.colors.white,
  leftIconColor: '#3F414E',
  leftButtonWithBorder: true,
}))``;

export const Body = styled.ScrollView.attrs<BodyProps>(({ safeBottom }) => ({
  contentContainerStyle: {
    paddingBottom: safeBottom + 20,
  },
  alwaysBounceVertical: false,
}))<BodyProps>``;

export const Main = styled.View`
  padding: 28px 20px 0;
`;

export const Inputs = styled.View`
  margin-top: 40px;
`;

export const Input = styled(FormTextInput)`
  margin-bottom: 20px;
`;

export const Button = styled(BaseButton)`
  margin-top: 30px;
`;
