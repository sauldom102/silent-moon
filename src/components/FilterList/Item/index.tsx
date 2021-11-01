import React, { FC, memo } from 'react';
import {
  AllFilterIcon,
  HeartIcon,
  KidFaceIcon,
  SadFaceIcon,
  SleepFilterIcon,
} from 'components/Icons';
import { colors } from 'theme';
import { useIdCallback } from 'utils';
import { Container, Main, Icon, Title } from './styles';
import { Props } from './types';

const Item: FC<Props> = ({
  id,
  title,
  icon,
  onPress,
  light = false,
  active = false,
}) => {
  const iconProps = {
    color: active ? colors.white : '#E6E7F2',
  };

  const handlePress = useIdCallback(onPress, id);

  return (
    <Container onPress={handlePress}>
      <Main>
        <Icon active={active}>
          {icon === 'all' && <AllFilterIcon {...iconProps} />}
          {icon === 'heart' && <HeartIcon {...iconProps} />}
          {icon === 'kid-face' && <KidFaceIcon {...iconProps} />}
          {icon === 'sad-face' && <SadFaceIcon {...iconProps} />}
          {icon === 'sleep' && <SleepFilterIcon {...iconProps} />}
        </Icon>
        <Title light={light} active={active}>
          {title}
        </Title>
      </Main>
    </Container>
  );
};

export default memo(Item);
