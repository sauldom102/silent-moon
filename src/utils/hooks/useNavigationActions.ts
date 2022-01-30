import { useCallback } from 'react';
import { push } from 'navigator/service';

const useNavigationActions = () => {
  const handleOpenStoryItem = useCallback((id: string) => {
    push('PlayOption', {
      id,
    });
  }, []);

  return {
    handleOpenStoryItem,
  };
};

export default useNavigationActions;
