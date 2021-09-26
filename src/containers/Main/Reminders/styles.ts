import styled from 'styled-components/native';
import {
  FormDatePicker,
  FormWeekDayPicker,
  Button as BaseButton,
  TextButton,
} from 'components';
import { ContainerProps } from './types';

export const Container = styled.ScrollView.attrs<ContainerProps>(
  ({ safeTop, safeBottom }) => ({
    contentContainerStyle: {
      paddingTop: 20 + safeTop,
      paddingHorizontal: 20,
      paddingBottom: 20 + safeBottom,
    },
  }),
)<ContainerProps>`
  background-color: ${({ theme }) => theme.colors.white};
`;

export const DatePicker = styled(FormDatePicker)`
  margin: 30px 0;
`;

export const WeekDayPicker = styled(FormWeekDayPicker)`
  margin-top: 40px;
`;

export const Button = styled(BaseButton)`
  margin-top: 57px;
`;

export const SecondaryButton = styled(TextButton).attrs(({ theme }) => ({
  color: theme.colors.title,
}))`
  margin-top: 12px;
`;
