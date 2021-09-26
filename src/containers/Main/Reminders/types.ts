import { MainStackScreenProps } from 'navigator/types';

export type Props = MainStackScreenProps<'Reminders'> & {};

export type ContainerProps = {
  safeTop: number;
  safeBottom: number;
};
