# Minimal repo to reproduce issue calling graphql with a resolver for an entity with an enum

yarn test

## This is the error I'm getting
```
yarn run v1.22.0
$ jest
 FAIL  src/modules/application/ApplicationResolver.test.ts
  ApplicationResolver
    ✕ creates and then retrieves application (17ms)

  ● ApplicationResolver › creates and then retrieves application

    Cannot determine GraphQL output type for status

      at Function.getGraphQLOutputType (node_modules/type-graphql/dist/schema/schema-generator.js:395:19)
      at node_modules/type-graphql/dist/schema/schema-generator.js:175:44
          at Array.reduce (<anonymous>)
      at fields (node_modules/type-graphql/dist/schema/schema-generator.js:169:56)
      at resolveThunk (node_modules/graphql/type/definition.js:438:40)
      at defineFieldMap (node_modules/graphql/type/definition.js:625:18)
      at GraphQLObjectType.getFields (node_modules/graphql/type/definition.js:579:27)
      at typeMapReducer (node_modules/graphql/type/schema.js:280:78)
      at typeMapReducer (node_modules/graphql/type/schema.js:286:20)
          at Array.reduce (<anonymous>)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        3.053s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
``` 