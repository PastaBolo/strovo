import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: User;

  constructor(private http: HttpClient) { }

  login(username: string, password: string): any {
    return this.http
      .post<any>('http://localhost:3000/auth/login', { username, password })
      .pipe(tap(({ user, access_token }) => {
        if (localStorage) { localStorage.setItem('access_token', access_token); }
        this.user = user;
      }));
  }

  logout() {
    this.user = null;
    if (localStorage) { localStorage.removeItem('access_token'); }
  }
}
