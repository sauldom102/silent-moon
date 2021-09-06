import React, { FC, memo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LightLogoIcon } from 'components';
import { Container, Title, To, Subtitle } from './styles';
import { Props } from './types';

const Header: FC<Props> = () => {
  const { top: safeTop } = useSafeAreaInsets();

  return (
    <Container safeTop={safeTop}>
      <LightLogoIcon />
      <Title>
        Hi Saul, Welcome<To>{`\nto Silent Moon`}</To>
      </Title>
      <Subtitle>
        Explore the app, Find some peace of mind to prepare for meditation.
      </Subtitle>
    </Container>
  );
};

export default memo(Header);
