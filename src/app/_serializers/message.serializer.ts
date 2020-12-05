import { Message } from '../_models/message';

export class MessageSerializer {
  fromJson(json: any): Message {
    if (json == null) {
      return;
    }
    const msg = new Message();
    msg.id = json.id;
    msg.time = json.name;
    msg.fill = json.fill;

    return msg;
  }

  toJson(msg: Message): any {
    return {
      id: msg.id,
      time: msg.time,
      fill: msg.fill,
    };
  }
}
