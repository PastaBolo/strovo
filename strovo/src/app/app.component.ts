import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private http: HttpClient, public authService: AuthService) { }

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe(console.log);
  }

  logout() {
    this.authService.logout();
  }

  create() {
    this.http.post('http://localhost:3000/runs', {
      runType: 'Walk',
      startDate: '1995-11-24T27:00:00.000Z',
      endDate: '1995-11-25T23:00:00.000Z',
      distance: 10,
      calories: 750
    }).subscribe(console.log);
  }

  delete() {
    this.http.delete('http://localhost:3000/runs/1573565717564').subscribe(console.log);
  }

  get() {
    this.http.get('http://localhost:3000/runs').subscribe(console.log);
  }

  getUserStats(userId: number) {
    this.http.get(`http://localhost:3000/users/stats/${userId}`).subscribe(console.log);
  }

  getUserStatsWithDates(userId: number) {
    this.http.get(`http://localhost:3000/users/stats/${userId}?startDate=coucou&endDate=byebye`).subscribe(console.log);
  }
}
