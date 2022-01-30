import React, { FC, memo } from 'react';
import isUndefined from 'lodash/isUndefined';
import pluralize from 'pluralize';
import {
  Container,
  Title,
  Subtitle,
  Description,
  Info,
  LabeledIcon,
} from './styles';
import { Props } from './types';

const ContentHeader: FC<Props> = ({
  title,
  subtitle,
  description,
  favoritesNum,
  listeningNum,
  style,
}) => (
  <Container style={style}>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
    {!!description && <Description>{description}</Description>}
    {(!isUndefined(favoritesNum) || !isUndefined(listeningNum)) && (
      <Info>
        {!isUndefined(favoritesNum) && (
          <LabeledIcon
            title={pluralize('Favorite', favoritesNum, true)}
            icon="like"
          />
        )}
        {!isUndefined(listeningNum) && (
          <LabeledIcon title={`${listeningNum} Listening`} icon="listen" />
        )}
      </Info>
    )}
  </Container>
);

export default memo(ContentHeader);
