import { createHttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { enableFlipperApolloDevtools } from 'react-native-flipper-apollo-devtools';
import { GRAPHQL_ENDPOINT } from 'config';

export const setupApollo = async () => {
  const httpLink = createHttpLink({ uri: GRAPHQL_ENDPOINT });

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    cache,
    link: httpLink,
  });

  if (__DEV__) {
    enableFlipperApolloDevtools(client as any);
  }

  return client;
};

export default setupApollo;
