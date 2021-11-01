import React, { FC, memo } from 'react';
import isUndefined from 'lodash/isUndefined';
import pluralize from 'pluralize';
import useThemeMode from 'theme/useThemeMode';
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
}) => {
  const { mode } = useThemeMode();
  const isNightMode = mode === 'night';

  return (
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
              light={!isNightMode}
            />
          )}
          {!isUndefined(listeningNum) && (
            <LabeledIcon
              title={`${listeningNum} Listening`}
              icon="listen"
              light={!isNightMode}
            />
          )}
        </Info>
      )}
    </Container>
  );
};

export default memo(ContentHeader);
