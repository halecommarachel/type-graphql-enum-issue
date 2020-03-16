import { Container } from "inversify";
import { buildSchema } from "type-graphql";
import { ApplicationResolver } from "../modules/application/ApplicationResolver";
import { authorization } from "./Authorization";
import { DataLoaderMiddleware } from "./DataLoaderMiddleware";

export const createSchema = (container: Container) =>
  buildSchema({
    resolvers: [ApplicationResolver!],
    container,
    authChecker: authorization,
    globalMiddlewares: [DataLoaderMiddleware]
  });
