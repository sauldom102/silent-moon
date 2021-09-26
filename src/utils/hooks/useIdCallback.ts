import { useCallback } from 'react';

const useIdCallback = <T>(cb?: (id: T) => void, id?: T) => {
  const callback = useCallback(() => {
    if (cb && id !== undefined) {
      cb(id);
    }
  }, [cb, id]);

  return callback;
};

export default useIdCallback;
