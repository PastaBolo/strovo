import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router, public authService: AuthService) { }

  users$ = this.http.get('http://localhost:3000/users');

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe(() => this.router.navigate(['/']));
  }
}
