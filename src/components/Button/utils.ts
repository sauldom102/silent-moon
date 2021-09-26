import { colors } from 'theme';
import { Variant } from './types';

// eslint-disable-next-line import/prefer-default-export
export const COLORS: Record<
  Variant,
  { background: string; title: string; border?: string; icon?: string }
> = {
  primary: {
    background: colors.primary,
    title: '#F6F1FB',
  },
  secondary: {
    background: '#EBEAEC',
    title: '#3F414E',
  },
  link: {
    background: 'transparent',
    title: '#3F414E',
  },
  facebook: {
    background: '#7583CA',
    title: '#F6F1FB',
    icon: 'facebook',
  },
  google: {
    background: '#fff',
    title: '#3F414E',
    border: '#EBEAEC',
    icon: 'google',
  },
};
