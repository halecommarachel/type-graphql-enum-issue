import DataLoader from "dataloader";
import { injectable } from "inversify";
import { MiddlewareInterface, NextFn, ResolverData } from "type-graphql";
import { Application } from "../entities/Application";
import { Context } from "../types/Context";

@injectable()
export class DataLoaderMiddleware implements MiddlewareInterface<Context> {
  async use({ context }: ResolverData<Context>, next: NextFn) {
    if (!context.isDataLoaderAttached) {
      context.isDataLoaderAttached = true;
      context.loaders = {
        applicationLoader: new DataLoader<string, Application | null>(
          keys =>
            new Promise((resolve, reject) => {
              const application = new Application();
              application.id = keys ? keys[0] : "test";
              resolve([application]);
            })
        )
      };
    }
    return next();
  }
}
