import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiEndpoints } from '../app.constants';
import { Bin } from '../_models/bin';
import { Message } from '../_models/message';
import { Page } from '../_models/page';
import { QueryOptions } from '../_utils/query-options';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const API_URL = environment.api_url;
@Injectable({
  providedIn: 'root',
})
export class BinService {
  private binsUrl = API_URL + '/' + ApiEndpoints.bins;
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

  async getBinCount(): Promise<number> {
    return await this.http
      .get<Message>(`${this.binsUrl}/count`)
      .pipe(map((data: any) => data))
      .toPromise();
  }

  getBinById(id: number): Observable<Bin> {
    return this.http
      .get<Bin>(`${this.binsUrl}/${id}`)
      .pipe(map((data: any) => data.model));
  }
}
