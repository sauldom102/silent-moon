import { useEffect, useState } from 'react';
import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import noop from 'lodash/noop';
import RNBootSplash from 'react-native-bootsplash';
import { setupApollo } from 'apollo';
import useThemeMode from 'theme/useThemeMode';

const useConnect = () => {
  const { theme, loaded: themeModeLoaded } = useThemeMode();

  const [apolloClient, setApolloClient] =
    useState<ApolloClient<NormalizedCacheObject>>();
  const [isUserInitialized, setUserInitialized] = useState(false);
  const [isApolloInitialized, setApolloInitialized] = useState(false);

  useEffect(() => {
    setupApollo()
      .then(async (client) => {
        setApolloClient(client);
        const userId = 'USER_ID';
        try {
          if (userId) {
            // TODO: add logic
          }
        } catch {
          noop();
        }
        setUserInitialized(true);
      })
      .finally(async () => {
        const status = await RNBootSplash.getVisibilityStatus();
        if (status !== 'hidden') RNBootSplash.hide({ fade: true });
        setApolloInitialized(true);
      });
  }, []);

  return {
    apolloClient,
    theme,
    ready: isUserInitialized && isApolloInitialized && themeModeLoaded,
  };
};

export default useConnect;
