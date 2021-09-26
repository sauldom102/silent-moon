import styled from 'styled-components/native';
import {
  Button as BaseButton,
  AlreadyAction,
  TitleSubtitle as BaseTitleSubtitle,
} from 'components';
import { BodyProps } from './types';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Body = styled.ScrollView.attrs<BodyProps>(
  ({ theme, safeBottom }) => ({
    contentContainerStyle: {
      minHeight: theme.device.height,
      justifyContent: 'space-between',
      paddingBottom: safeBottom + 20,
    },
  }),
)<BodyProps>``;

export const TitleSubtitle = styled(BaseTitleSubtitle)`
  margin-top: 10px;
  padding: 0 20px;
`;

export const Bottom = styled.View`
  padding: 0 20px;
  margin-top: 20px;
`;

export const Button = styled(BaseButton)``;

export const Already = styled(AlreadyAction)`
  align-self: center;
  margin-top: 20px;
`;
