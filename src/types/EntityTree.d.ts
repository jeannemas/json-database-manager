/* eslint-disable import/prefer-default-export */

import { Entity } from '../Entity';

interface EntityTree {
  [key: string]: EntityTree | Entity;
}

export { EntityTree };
