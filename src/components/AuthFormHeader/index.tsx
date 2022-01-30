import React, { FC, memo, useCallback } from 'react';
import { Container, Title, Button, Subtitle } from './styles';
import { Props } from './types';

const AuthFormHeader: FC<Props> = ({ title, subtitle, onPressButton }) => {
  const handlePressFacebook = useCallback(() => {
    onPressButton?.('facebook');
  }, [onPressButton]);

  const handlePressGoogle = useCallback(() => {
    onPressButton?.('google');
  }, [onPressButton]);

  return (
    <Container>
      <Title>{title}</Title>
      <Button
        title="Continue with Facebook"
        variant="facebook"
        onPress={handlePressFacebook}
      />
      <Button
        title="Continue with Google"
        variant="google"
        onPress={handlePressGoogle}
      />
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
};

export default memo(AuthFormHeader);
