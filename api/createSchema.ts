import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { addResolversToSchema } from '@graphql-tools/schema';
import { loadSchema } from '@graphql-tools/load'
import resolvers from './resolvers';

export const createSchema = async () => {
  const schema = await loadSchema('schema/**/*.graphql', {
    // load files and merge them into a single schema object
    loaders: [new GraphQLFileLoader()]
  })

  const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers
  });

  return schemaWithResolvers;
}
