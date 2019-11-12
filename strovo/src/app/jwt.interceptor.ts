import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // if (this.authService.access_token) {
    if (localStorage && localStorage.getItem('access_token')) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
      });
    }
    return next.handle(request);
  }
}
