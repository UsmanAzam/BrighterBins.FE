import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Resource } from '../_models/resource';
import { Serializer } from '../_serializers/serializer';
import { map, tap } from 'rxjs/operators';
import { QueryOptions } from '../_utils/query-options';

export class ResourceService<T extends Resource> {
  url: string;
  endpoint: string;
  constructor(
    protected httpClient: HttpClient,
    endpoint: string,
    protected serializer: Serializer
  ) {
    this.url = environment.api_url;
    this.endpoint = endpoint;
  }

  create(item: T): any {
    return this.httpClient
      .post(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
      .pipe(
        map((data: any) => {
          if (!Array.isArray(data.model)) {
            return this.serializer.fromJson(data.model) as T;
          } else if (Array.isArray(data.model)) {
            return this.convertData(data.model);
          }
        })
      );
  }

  update(item: T): any {
    return this.httpClient
      .put(
        `${this.url}/${this.endpoint}/${item.id}`,
        this.serializer.toJson(item)
      )
      .pipe(
        map((data: any) => {
          if (!Array.isArray(data.model)) {
            return this.serializer.fromJson(data.model) as T;
          } else if (Array.isArray(data.model)) {
            return this.convertData(data.model);
          }
        })
      );
  }
  updateWithoutId(item: T): any {
    return this.httpClient
      .put(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
      .pipe(
        map((data: any) => {
          if (!Array.isArray(data.model)) {
            return this.serializer.fromJson(data.model) as T;
          } else if (Array.isArray(data.model)) {
            return this.convertData(data.model);
          }
        })
      );
  }

  patch(item: T, subAction: string = ''): any {
    let url = `${this.url}/${this.endpoint}/${item.id}`;
    if (subAction) {
      url += `/${subAction}`;
    }
    return this.httpClient.patch(url, this.serializer.toJson(item)).pipe(
      map((data: any) => {
        if (!Array.isArray(data.model)) {
          return this.serializer.fromJson(data.model) as T;
        } else if (Array.isArray(data.model)) {
          return this.convertData(data.model);
        }
      })
    );
  }

  patchById(id: number, subAction: string = ''): any {
    let url = `${this.url}/${this.endpoint}/${id}`;
    if (subAction) {
      url += `/${subAction}`;
    }
    return this.httpClient.patch(url, {}).pipe(
      map((data: any) => {
        if (!Array.isArray(data.model)) {
          return this.serializer.fromJson(data.model) as T;
        } else if (Array.isArray(data.model)) {
          return this.convertData(data.model);
        }
      })
    );
  }

  read(id: number): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}`)
      .pipe(map((data: any) => this.serializer.fromJson(data.model) as T));
  }

  readWithoutId(): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}`)
      .pipe(map((data: any) => this.serializer.fromJson(data.model) as T));
  }

  readWithQueryOptions(queryOptions: QueryOptions): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`)
      .pipe(map((data: any) => this.serializer.fromJson(data.model) as T));
  }

  listWithQueryOptions(queryOptions: QueryOptions): any {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`)
      .pipe(map((data: any) => this.convertData(data.model)));
  }

  list(): any {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}`)
      .pipe(map((data: any) => this.convertData(data.model)));
  }

  pagedList(queryOptions: QueryOptions): Observable<T[]> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`)
      .pipe(map((data: any) => this.convertData(data.model)));
  }

  delete(id: number): any {
    return this.httpClient.delete(`${this.url}/${this.endpoint}/${id}`).pipe(
      map((data: any) => {
        if (!Array.isArray(data.model)) {
          return this.serializer.fromJson(data.model) as T;
        } else if (Array.isArray(data.model)) {
          return this.convertData(data.model);
        }
      })
    );
  }

  private convertData(data: any): T[] {
    return data.map((item: any) => this.serializer.fromJson(item));
  }
}
