import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [CommonModule, ButtonFullComponent, ReactiveFormsModule],
})
export class LoginComponent {
  loginForm: FormGroup;
  public error: string | null = null;

  constructor(
    private fb: FormBuilder,
    public authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): void {
    console.log('login');
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (response) => {
          if (response.ok) {
            this.router.navigate(['/konto']);
          } else {
            switch (response.error.title) {
              case 'Unauthorized':
                this.error =
                  'Podany email lub hasło jest nieprawidłowe, spróbuj ponownie.';
                break;
              default:
                this.error = 'Błąd logowania';
            }
            console.log(response.error.title);
          }

          // Handle successful login, e.g., navigating to the dashboard
        },
        // error: (error) => {
        //   // Handle login error, e.g., displaying an error message
        //   this.error = 'Login failed';
        //   console.log(error);
        // },
      });
    }
  }
}
