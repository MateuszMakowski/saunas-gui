// auth.service.ts
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginUrl = 'http://localhost:5182/api/Users/login';
  private registerUrl = 'http://localhost:5182/api/Users';
  public userRole = '';

  private isLoggedInSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(this.hasToken());

  constructor(
    private http: HttpClient,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  public login(credentials: {
    email: string;
    password: string;
  }): Observable<any> {
    return this.http.post(this.loginUrl, credentials).pipe(
      tap((response) => this.setSession(response)),
      catchError((error) => {
        // handle error
        return of(error);
      })
    );
  }

  public register(user: {
    name: string;
    email: string;
    password: string;
    role: string;
  }): Observable<any> {
    console.log('Wszedl do rejestracji');
    return this.http.post(this.registerUrl, user);
  }

  private setSession(authResult: any): void {
    localStorage.setItem('id_token', authResult.token);
    const decodedToken: any = jwtDecode(authResult.token);
    this.userRole = decodedToken.role;
    // Tutaj masz dostęp do roli
    // Ustaw także inne dane z odpowiedzi, jeśli są potrzebne
    this.isLoggedInSubject.next(true);
  }

  public logout(): void {
    localStorage.removeItem('id_token');
    this.isLoggedInSubject.next(false);
    // Wyczyść inne dane przechowywane w trakcie sesji
  }

  private hasToken(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('id_token');
      if (token) {
        const decodedToken: any = jwtDecode(token);
        this.userRole = decodedToken.role;
        console.log(this.userRole);
      }
      return !!token;
    } else {
      return false;
    }
  }

  // Zakładając, że token jest przechowywany w localStorage
  private getToken(): string | null {
    return localStorage.getItem('id_token');
  }

  public getUserRole(): string {
    if (this.userRole) {
      console.log(this.userRole);
      return this.userRole;
    } else {
      const token = this.getToken();
      if (token) {
        const decodedToken: any = jwtDecode(token);
        return decodedToken.role;
      }
      return ''; // Domyślnie zwraca pusty string, jeśli rola nie jest dostępna
    }
  }

  // Getter do obserwowania stanu zalogowania
  public get isLoggedIn$(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }
}
