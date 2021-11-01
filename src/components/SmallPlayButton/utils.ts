import { colors } from 'theme';
import { Variant } from './types';

// eslint-disable-next-line import/prefer-default-export
export const COLORS: Record<
  Variant,
  { bgColor: string; iconColor: string; borderColor?: string }
> = {
  light: {
    bgColor: colors.white,
    iconColor: colors.title,
  },
  primary: {
    bgColor: colors.primary,
    iconColor: '#F6F1FB',
  },
  secondary: {
    bgColor: colors.transparent,
    iconColor: colors.subtitle,
    borderColor: colors.subtitle,
  },
};
