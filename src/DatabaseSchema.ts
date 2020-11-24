/* eslint-disable import/prefer-default-export */

import { EntityTree } from './types/EntityTree';

class DatabaseSchema {
  private tree: EntityTree;

  public constructor(tree: EntityTree) {
    this.tree = tree;
  }

  public static create(tree: EntityTree): DatabaseSchema {
    return new DatabaseSchema(tree);
  }
}

export { DatabaseSchema };
