import React, { FC, memo } from 'react';
import { BackIcon, CloseIcon, DownloadIcon, LikeIcon } from 'components/Icons';
import { Container, Main } from './styles';
import { Props } from './types';

const IconButton: FC<Props> = ({
  backgroundColor,
  iconColor,
  borderColor,
  icon,
  onPress,
  style,
}) => {
  const iconProps = { color: iconColor };

  return (
    <Container
      onPress={onPress}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      style={style}
    >
      <Main>
        {icon === 'back' && <BackIcon {...iconProps} />}
        {icon === 'close' && <CloseIcon {...iconProps} />}
        {icon === 'download' && <DownloadIcon {...iconProps} />}
        {icon === 'like' && <LikeIcon {...iconProps} />}
      </Main>
    </Container>
  );
};

export default memo(IconButton);
