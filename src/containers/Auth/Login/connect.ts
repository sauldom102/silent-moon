import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useInputRefs, useCustomForm, useLoggedIn } from 'utils';
import { INPUT_NAMES, DEFAULT_VALUES, validationSchema } from './constants';
import { Props } from './types';

const useConnect = () => {
  const { bottom: safeBottom } = useSafeAreaInsets();

  const { canGoBack, goBack } = useNavigation<Props['navigation']>();

  const { updateLoggedIn } = useLoggedIn();

  const handleGoBack = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  const { refs: inputRefs } = useInputRefs(INPUT_NAMES);

  const handleSubmit = useCallback(() => {
    updateLoggedIn(true);
  }, [updateLoggedIn]);

  const { control, submit, isValid } = useCustomForm({
    defaultValues: DEFAULT_VALUES,
    onSubmit: handleSubmit,
    validationSchema,
  });

  const handleContinueSocial = useCallback(() => {
    updateLoggedIn(true);
  }, [updateLoggedIn]);

  return {
    safeBottom,
    handleGoBack,
    inputRefs,
    control,
    submit,
    isValid,
    handleContinueSocial,
  };
};

export default useConnect;
