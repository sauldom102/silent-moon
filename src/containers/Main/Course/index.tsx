import React, { FC, useCallback } from 'react';
import { ContentHeader, StatusBar, HeaderImage } from 'components';
import { COURSE_MUSIC_ITEMS } from 'models/CourseMusic';
import useConnect from './connect';
import Item from './Item';
import {
  Container,
  Header,
  Body,
  ExtraBottom,
  NarratorPicker,
  List,
  SeparatorWrapper,
  Separator,
} from './styles';
import { Props, RenderItemProps } from './types';

const Course: FC<Props> = () => {
  const { item, handlePressClose, handlePressPlayButton, safeBottom } =
    useConnect();

  const handleRenderHeader = useCallback(
    () => (
      <>
        <ExtraBottom />
        <Body>
          <ContentHeader
            title={item!.title}
            subtitle="Course"
            description="Ease the mind into a restful night’s sleep with these deep, amblent tones."
            favoritesNum={24434}
            listeningNum={34234}
          />
          <NarratorPicker />
        </Body>
      </>
    ),
    [item],
  );

  const handleRenderItem = useCallback(
    ({ item: it, index }: RenderItemProps) => (
      <Item
        id={it.id}
        title={it.title}
        subtitle={it.duration}
        playing={index === 0}
        onPressPlay={handlePressPlayButton}
      />
    ),
    [handlePressPlayButton],
  );

  const handleRenderSeparator = useCallback(
    () => (
      <SeparatorWrapper>
        <Separator />
      </SeparatorWrapper>
    ),
    [],
  );

  if (!item) {
    return null;
  }

  return (
    <Container>
      <StatusBar light />
      <HeaderImage source={item.image} color={item.color} />
      <Header
        leftIcon="close"
        onPressLeft={handlePressClose}
        rightIcon="download"
        secondRightIcon="like"
      />
      <List
        data={COURSE_MUSIC_ITEMS}
        ListHeaderComponent={handleRenderHeader}
        renderItem={handleRenderItem}
        ItemSeparatorComponent={handleRenderSeparator}
        safeBottom={safeBottom}
      />
    </Container>
  );
};

export default Course;
