import { object, string } from 'yup';

export const validationSchema = object().shape({
  email: string().email(),
  password: string().required(),
});

export const DEFAULT_VALUES = {
  email: '',
  password: '',
};

export type Values = typeof DEFAULT_VALUES;

export const INPUT_NAMES = ['password'];
