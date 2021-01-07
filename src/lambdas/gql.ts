import { ApolloServer, gql } from 'apollo-server-lambda';
import { APIGatewayProxyEvent, Callback, Context } from 'aws-lambda';

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: () => 'Hello World!'
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

export const handler = (event: APIGatewayProxyEvent, context: Context, callback: Callback) => {
  console.log('event is: ', JSON.stringify(event, null, 2))
  
  return server.createHandler({
    cors: {
      origin: '*'
    }
  })(event, context, callback);
}
