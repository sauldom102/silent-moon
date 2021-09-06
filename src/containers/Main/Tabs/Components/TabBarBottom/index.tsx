import React, { FC, memo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableItem from './Item';
import { Container } from './styles';
import { Props } from './types';

const TabBarBottom: FC<Props> = ({ navigation, state }) => {
  const { bottom: safeBottom } = useSafeAreaInsets();

  return (
    <Container safeBottom={safeBottom}>
      {state.routes.map((route, i) => (
        <TouchableItem
          key={route.key}
          isFocused={i === state.index}
          jumpTo={navigation.navigate}
          routeName={route.name}
          routeKey={route.key}
        />
      ))}
    </Container>
  );
};

export default memo(TabBarBottom);
