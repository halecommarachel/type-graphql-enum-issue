import { Container } from "inversify";
import { ApplicationResolver } from "./modules/application/ApplicationResolver";
import { DataLoaderMiddleware } from "./utils/DataLoaderMiddleware";

const container = new Container({ defaultScope: "Singleton" });
container.bind<ApplicationResolver>(ApplicationResolver).toSelf();
container.bind<DataLoaderMiddleware>(DataLoaderMiddleware).toSelf();
export default container;
