import { useMemo, createRef, RefObject } from 'react';
import { TextInput } from 'react-native';

const useInputRefs = (inputNames: string[]) => {
  const refs = useMemo<Record<string, RefObject<TextInput>>>(
    () =>
      inputNames.reduce(
        (all, name) => ({
          ...all,
          [name]: createRef<TextInput>(),
        }),
        {},
      ),
    [inputNames],
  );

  return {
    refs,
  };
};

export default useInputRefs;
