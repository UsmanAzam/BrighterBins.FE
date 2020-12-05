import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiEndpoints } from '../app.constants';
import { Bin } from '../_models/bin';
import { Message } from '../_models/message';
import { BinSerializer } from '../_serializers/bin.serializer';
import { ResourceService } from './resource.service';

@Injectable({
  providedIn: 'root',
})
export class BinService extends ResourceService<Bin> {
  constructor(httpClient: HttpClient) {
    super(httpClient, ApiEndpoints.bins, new BinSerializer());
  }

  async getBinList(): Promise<Bin[]> {
    return await this.list().toPromise();
  }

  async getMessagesByBin(id: number): Promise<any[]> {
    return await this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}/messages`)
      .pipe(map((data: any) => data.model))
      .toPromise();
  }
}
