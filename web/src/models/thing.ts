import { Item } from './item';

export interface Thing {
  thingId: string;
  title: string;
  description: string;
  items?: [Item];
}
