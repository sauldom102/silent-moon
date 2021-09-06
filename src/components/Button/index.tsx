import React, { FC, memo } from 'react';
import { Container, Main, Body, Title } from './styles';
import { Props } from './types';
import { COLORS } from './utils';

const Button: FC<Props> = ({
  title,
  variant = 'primary',
  onPress,
  enabled,
  style,
  titleStyle,
}) => {
  const { background: backgroundColor, title: titleColor } = COLORS[variant];

  return (
    <Container color={backgroundColor} style={style}>
      <Main onPress={onPress} enabled={enabled}>
        <Body>
          <Title color={titleColor} style={titleStyle}>
            {title}
          </Title>
        </Body>
      </Main>
    </Container>
  );
};

export default memo(Button);
