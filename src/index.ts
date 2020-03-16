import { ApolloServer } from "apollo-server-express";
import Express from "express";
import "reflect-metadata";
import container from "./inversify.config";
import { createSchema } from "./utils/createSchema";
import { registerEnums } from "./utils/registerEnums";

const main = async () => {
  // register enums with type-graphql
  registerEnums();

  const schema = await createSchema(container);

  const apolloServer = new ApolloServer({ schema });

  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    // tslint:disable-next-line:no-console
    console.log(
      "Server is running, GraphQL Playground available at http://localhost:4000/graphql"
    );
  });
};

main();
