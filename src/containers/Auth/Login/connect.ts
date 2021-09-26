import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useInputRefs, useCustomForm } from 'utils';
import { INPUT_NAMES, DEFAULT_VALUES, validationSchema } from './constants';
import { Props } from './types';

const useConnect = () => {
  const { bottom: safeBottom } = useSafeAreaInsets();

  const { canGoBack, goBack } = useNavigation<Props['navigation']>();

  const handleGoBack = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  const { refs: inputRefs } = useInputRefs(INPUT_NAMES);

  const handleSubmit = useCallback(() => {}, []);

  const { control, submit, isValid } = useCustomForm({
    defaultValues: DEFAULT_VALUES,
    onSubmit: handleSubmit,
    validationSchema,
  });

  return {
    safeBottom,
    handleGoBack,
    inputRefs,
    control,
    submit,
    isValid,
  };
};

export default useConnect;
