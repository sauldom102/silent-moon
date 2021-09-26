import { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useCustomForm } from 'utils';
import { DEFAULT_VALUES, validationSchema } from './constants';

const useConnect = () => {
  const { canGoBack, goBack } = useNavigation();

  const { top: safeTop, bottom: safeBottom } = useSafeAreaInsets();

  const handleGoBack = useCallback(() => {
    if (canGoBack()) {
      goBack();
    }
  }, [canGoBack, goBack]);

  const handleSubmit = useCallback(() => {
    handleGoBack();
  }, [handleGoBack]);

  const handlePressCancel = useCallback(() => {
    handleGoBack();
  }, [handleGoBack]);

  const { control, submit, isValid } = useCustomForm({
    defaultValues: DEFAULT_VALUES,
    onSubmit: handleSubmit,
    validationSchema,
  });

  return {
    safeTop,
    safeBottom,
    control,
    submit,
    isValid,
    handlePressCancel,
  };
};

export default useConnect;
