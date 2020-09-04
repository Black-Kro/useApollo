import { ApolloClient, InMemoryCache, gql } from '@apollo/client/core';

export const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache()
});
