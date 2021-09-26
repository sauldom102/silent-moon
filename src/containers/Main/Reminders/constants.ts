import { object, date, array, number } from 'yup';

export const validationSchema = object().shape({
  time: date().required(),
  days: array().of(number()),
});

export const DEFAULT_VALUES = {
  time: new Date(),
  days: [],
};

export type Values = typeof DEFAULT_VALUES;
