import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiEndpoints } from '../app.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

const API_URL = environment.api_url;
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authUrl = API_URL + '/' + ApiEndpoints.auth;
  constructor(private http: HttpClient) {}

  async checkExistingUsername(username: string): Promise<number> {
    return await this.http
      .get<boolean>(`${this.authUrl}/users/check?username=${username}`)
      .pipe(map((data: any) => data))
      .toPromise();
  }

  async createUser(user: any): Promise<boolean> {
    return await this.http
      .post<boolean>(`${this.authUrl}/signup`, user)
      .pipe(map((data: any) => data))
      .toPromise();
  }
}
