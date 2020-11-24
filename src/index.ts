// TODO: Add schema support

import { IConfiguration } from './types/Configuration';

class JSONDatabaseManager {
  private databaseFile: File;

  private conf: IConfiguration = {
    defaultIndentation: 0,
    defaultDatabaseContent: {},
    clearDatabaseOnStartup: false,
  };

  public constructor(databaseFile: File);
  public constructor(databaseFilePath: string);
  public constructor(fileOrPath: File | string) {
    if (typeof fileOrPath === 'string') {
      this.databaseFile = new File(null, fileOrPath);
    } else {
      this.databaseFile = fileOrPath;
    }
  }

  // Stub
  public async init(): Promise<void> {
    this;

    return Promise.resolve();
  }

  // Stub
  public async get<O extends unknown>(predicate: () => O): Promise<O> {
    this;

    return Promise.resolve(undefined);
  }

  // Stub
  public async set(predicate: () => unknown): Promise<void> {
    this;

    return Promise.resolve();
  }
}

export default JSONDatabaseManager;
