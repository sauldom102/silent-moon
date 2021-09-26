import { object, string } from 'yup';

export const validationSchema = object().shape({
  name: string().required(),
  email: string().email(),
  password: string().required(),
});

export const DEFAULT_VALUES = {
  name: '',
  email: '',
  password: '',
};

export type Values = typeof DEFAULT_VALUES;

export const INPUT_NAMES = ['email', 'password'];
