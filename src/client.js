import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';

let cache = new InMemoryCache()
export const client = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cj4bfs1ssev150172ffitlgva',
  cache
});

cache.writeData({
  data: {
    visibilityFilter: 'SHOW_ALL',
    networkStatus: {
      __typename: 'NetworkStatus',
      isConnected: false,
    },
  },
});