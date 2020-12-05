import { Bin } from '../_models/bin';
import { MessageSerializer } from './message.serializer';

export class BinSerializer {
  messageSerializer: MessageSerializer = new MessageSerializer();

  fromJson(json: any): Bin {
    if (json == null) {
      return;
    }
    const bin = new Bin();
    bin.id = json.id;
    bin.name = json.name;
    bin.fillLevel = json.fillLevel;
    bin.lat = json.lat;
    bin.long = json.long;

    if (json.messages) {
      json.messages.forEach((element: any) => {
        bin.messages.push(this.messageSerializer.fromJson(element));
      });
    }

    return bin;
  }

  toJson(bin: Bin): any {
    const json = {
      id: bin.id,
      name: bin.name,
      fillLevel: bin.fillLevel,
      lat: bin.lat,
      long: bin.long,
      messages: [],
    };

    if (bin.messages) {
      json.messages = [];
      bin.messages.forEach((element: any) => {
        json.messages.push(this.messageSerializer.toJson(element));
      });
    }

    return bin;
  }
}
