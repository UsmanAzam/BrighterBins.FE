import { Message } from './message';
import { Resource } from './resource';

export class Bin extends Resource {
  name: string;
  fillLevel: number;
  lat: number;
  long: number;
  messages: Message[] = [];
}
