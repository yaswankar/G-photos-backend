const express = require('express');
const path = require('path');
const express_graphql = require('express-graphql').graphqlHTTP;
const { loadSchemaSync } =  require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');
const { addResolversToSchema } = require('@graphql-tools/schema');

const getResolvers = require('./graphql/resolvers');

// GraphQL schema
const combinedSchema = loadSchemaSync(
    path.join(__dirname, './graphql/schemas/*.graphql'),
    {
      loaders: [new GraphQLFileLoader()],
    }
  );
const schema = addResolversToSchema({
    schema: combinedSchema,
    resolvers: Object.assign({}, getResolvers())
  });

// Create an express server and a GraphQL endpoint
const app = express();

app.use('/graphql', express_graphql({
    schema: schema,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));