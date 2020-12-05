export interface QueryBuilder {
  // toQueryMap: () => Map<string, string>;
  toQueryString: () => string;
}

export class QueryOptions implements QueryBuilder {
  // public pageNumber: number;
  // public pageSize: number;
  private queryMap = new Map<string, string>();

  constructor() {
    // this.pageNumber = 1;
    // this.pageSize = 10000;
  }

  private toQueryMap() {
    // const queryMap = new Map<string, string>();
    // queryMap.set('pageNumber', `${this.pageNumber}`);
    // queryMap.set('pageSize', `${this.pageSize}`);

    return this.queryMap;
  }

  addQuery(key: string, value: string) {
    this.queryMap.set(key, value);
  }

  toQueryString() {
    let queryString = '';
    this.toQueryMap().forEach((value: string, key: string) => {
      queryString = queryString.concat(`${key}=${value}&`);
    });

    return queryString.substring(0, queryString.length - 1);
  }
}
