import { useMemo } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  DeepPartial,
  SubmitErrorHandler,
  SubmitHandler,
  UnpackNestedValue,
  useForm,
} from 'react-hook-form';
import { ObjectSchema } from 'yup';

type LogicParams<T> = {
  defaultValues: UnpackNestedValue<DeepPartial<T>>;
  onSubmit?: SubmitHandler<T>;
  onError?: SubmitErrorHandler<T>;
  validationSchema?: ObjectSchema<any>;
  resetOnSubmit?: boolean;
};

const useCustomForm = <T>({
  defaultValues,
  onSubmit,
  onError,
  validationSchema,
  resetOnSubmit = false,
}: LogicParams<T>) => {
  const formMethods = useForm<T>({
    defaultValues,
    resolver: validationSchema ? yupResolver(validationSchema) : undefined,
    mode: 'all',
  });
  const { handleSubmit, reset } = formMethods;

  const submit = useMemo(
    () =>
      handleSubmit(async (onValid, onInvalid) => {
        if (onSubmit) {
          await onSubmit(onValid, onInvalid);
          if (resetOnSubmit) {
            reset();
          }
        }
      }, onError),
    [handleSubmit, onSubmit, resetOnSubmit, reset, onError],
  );

  return {
    ...formMethods,
    formMethods,
    submit,
    isValid: formMethods.formState.isValid,
  };
};

export default useCustomForm;
