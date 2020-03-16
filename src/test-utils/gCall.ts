import { graphql, GraphQLSchema } from "graphql";
import Maybe from "graphql/tsutils/Maybe";
import { Container } from "inversify";
import { createSchema } from "../utils/createSchema";

interface Options {
  source: string;
  variableValues?: Maybe<{
    [key: string]: any;
  }>;
}

let schema: GraphQLSchema;

export const gCall = async (
  { source, variableValues }: Options,
  container: Container,
  forceNewSchema: boolean = false,
  contextValue: any = {}
) => {
  if (forceNewSchema || !schema) {
    schema = await createSchema(container);
  }
  return graphql({
    schema,
    source,
    variableValues,
    contextValue
  });
};
