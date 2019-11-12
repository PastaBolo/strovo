import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users$ = this.http.get('http://localhost:3000/users');

  constructor(private http: HttpClient) { }

  getUser(id: number) {
    return this.http.get(`http://localhost:3000/users/${id}`);
  }

  getUserStats(id: number) {
    // return this.http.get(`http://localhost:3000/users/stats/${id}?startDate=2019-12-02T27:00:00.000Z`);
    return this.http.get(`http://localhost:3000/users/stats/${id}?startDate=2019-12-02T27:00:00.000Z&endDate=2019-12-04T27:00:00.000Z`);
  }
}
