import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class authGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate: CanActivateFn = (route, state) => {
    return this.authService.isLoggedIn$.pipe(
      take(1), // Pobiera jedną wartość ze strumienia i kończy subskrypcję
      map((isLoggedIn) => {
        if (isLoggedIn) {
          console.log('Użytkownik jest zalogowany, kontynuuj nawigację');
          return true; // Użytkownik jest zalogowany, kontynuuj nawigację
        } else {
          // Użytkownik nie jest zalogowany, przekieruj do strony logowania
          // i zwróć UrlTree, aby anulować nawigację
          return this.router.createUrlTree(['/login'], {
            queryParams: { returnUrl: state.url },
          });
        }
      })
    );
  };
}
