import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer dafhsdjkfhasdjklghkasdlghaksdghklasdjgjklasghjkasdhgjklashgk`,
  },
});

export default client;