import React, { FC, memo } from 'react';
import { FacebookIcon, GoogleIcon } from 'components/Icons';
import { Container, Main, Body, Left, Title } from './styles';
import { Props } from './types';
import { COLORS } from './utils';

const Button: FC<Props> = ({
  title,
  variant = 'primary',
  onPress,
  enabled = true,
  style,
  titleStyle,
}) => {
  const {
    background: backgroundColor,
    title: titleColor,
    border: borderColor,
    icon,
  } = COLORS[variant];

  return (
    <Container
      color={backgroundColor}
      borderColor={borderColor}
      enabled={enabled}
      style={style}
    >
      <Main onPress={onPress} enabled={enabled}>
        <Body>
          {!!icon && (
            <Left>
              {icon === 'facebook' && <FacebookIcon />}
              {icon === 'google' && <GoogleIcon />}
            </Left>
          )}
          <Title color={titleColor} style={titleStyle}>
            {title}
          </Title>
        </Body>
      </Main>
    </Container>
  );
};

export default memo(Button);
