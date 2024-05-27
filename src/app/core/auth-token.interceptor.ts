import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Pobierz token z localStorage
    const idToken = localStorage.getItem('id_token');
    console.log('test idToken: ' + idToken);
    if (idToken) {
      // Jeśli token istnieje, klonuj request i dodaj token do nagłówka Authorization
      const cloned = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + idToken),
      });
      console.log(cloned);
      return next.handle(cloned);
    } else {
      // Jeśli nie ma tokena, prześlij request bez modyfikacji
      return next.handle(request);
    }
  }
}
