import React, { FC, memo } from 'react';
import { ThemeProvider } from 'styled-components/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import theme, { nightTheme } from 'theme';
import TouchableItem from './Item';
import { Container } from './styles';
import { Props } from './types';

const TabBarBottom: FC<Props> = ({ navigation, state }) => {
  const { bottom: safeBottom } = useSafeAreaInsets();

  return (
    <ThemeProvider theme={state.index === 1 ? nightTheme : theme}>
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
    </ThemeProvider>
  );
};

export default memo(TabBarBottom);
