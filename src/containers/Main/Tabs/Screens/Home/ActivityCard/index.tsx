import React, { FC, memo, useCallback } from 'react';
import { useLayout } from '@react-native-community/hooks';
import {
  Container,
  Main,
  Body,
  Title,
  Topic,
  Bottom,
  Duration,
  Button,
} from './styles';
import { Props } from './types';

const ActivityCard: FC<Props> = ({
  id,
  title,
  topic,
  color,
  duration,
  onPress,
  light = false,
  style,
}) => {
  const { onLayout, width } = useLayout();

  const handlePress = useCallback(() => {
    if (onPress) {
      onPress(id);
    }
  }, [onPress, id]);

  const height = (210 * width) / 177;

  return (
    <Container onPress={handlePress} style={style}>
      <Main onLayout={onLayout} height={height} color={color}>
        <Body>
          <Title light={light}>{title}</Title>
          <Topic light={light}>{topic}</Topic>
        </Body>
        <Bottom>
          <Duration light={light}>{duration}</Duration>
          <Button title="Start" enabled={false} light={light} />
        </Bottom>
      </Main>
    </Container>
  );
};

export default memo(ActivityCard);
