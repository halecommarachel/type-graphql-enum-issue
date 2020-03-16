import DataLoader from "dataloader";

interface Loaders {
  [key: string]: DataLoader<string, any>;
}

export interface Context {
  isDataLoaderAttached: boolean;
  loaders: Loaders;
}
