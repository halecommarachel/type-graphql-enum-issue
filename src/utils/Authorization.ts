import { AuthChecker } from "type-graphql";

export const authorization: AuthChecker = () => {
  // add authorization logic
  // check for user and role specific access
  return true;
};
