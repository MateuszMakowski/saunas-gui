import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { ButtonFullComponent } from '../../shared/components/button-full/button-full.component';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ButtonFullComponent, ReactiveFormsModule],
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  error: string | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: never,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['user', []],
    });
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

  register(): void {
    console.log('Przed validacja');
    if (this.registerForm.valid) {
      console.log('Przeszedl validacje forma');
      this.authService.register(this.registerForm.value).subscribe({
        next: (response) => {
          // Obsługa odpowiedzi po pomyślnej rejestracji, np. przekierowanie
          console.log('Registration successful', response);
          this.router.navigate(['/logowanie']);
          // Przekierowanie po pomyślnej rejestracji, np. do strony logowania
        },
        error: (error) => {
          console.log(error);
          // Obsługa błędów, np. wyświetlenie komunikatu
          this.error = error.error.message || 'Registration failed';
        },
      });
    }
  }
}
