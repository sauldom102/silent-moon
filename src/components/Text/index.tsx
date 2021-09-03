import React, { FC, memo, forwardRef } from 'react';
import { Text as NativeText } from 'react-native';
import { Props } from './types';

const Text: FC<Props> = forwardRef<NativeText, Props>(
  ({ family = undefined, style, ...rest }, ref) => (
    <NativeText
      testID="text"
      style={[
        {
          fontFamily: family,
        },
        style,
      ]}
      ref={ref}
      {...rest}
    />
  ),
);

export default memo(Text);
