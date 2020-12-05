import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiEndpoints } from '../app.constants';
import { Bin } from '../_models/bin';
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
}
