import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiEndpoints } from '../app.constants';
import { Bin } from '../_models/bin';
import { Message } from '../_models/message';
import { Page } from '../_models/page';
import { BinSerializer } from '../_serializers/bin.serializer';
import { QueryOptions } from '../_utils/query-options';
import { ResourceService } from './resource.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const API_URL = environment.api_url;
@Injectable({
  providedIn: 'root',
})
export class BinService {
  private binsUrl = API_URL + '/bins';
  constructor(private http: HttpClient) {}

  public getBinPage(query: QueryOptions): Observable<Page<Bin>> {
    const url =
      this.binsUrl +
      '?page_number=' +
      query.pageNumber +
      '&page_size=' +
      query.pageSize;
    return this.http.get<Page<Bin>>(url, httpOptions);
  }

  async getMessagesByBin(id: number): Promise<any[]> {
    return await this.http
      .get<Message>(`${this.binsUrl}/${id}/messages`)
      .pipe(map((data: any) => data.model))
      .toPromise();
  }
}
