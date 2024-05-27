import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hamburger',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './hamburger.component.html',
  styleUrl: './hamburger.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
})
export class HamburgerComponent {
  isLoggedIn$: Observable<boolean>;

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }

  checked: boolean = false;
  isOpen: boolean = false;
  showOrHideMenu() {
    if (this.checked) {
      this.isOpen = false;
      setTimeout(() => {
        this.checked = false;
      }, 500);
    } else {
      this.checked = true;
      setTimeout(() => {
        this.isOpen = true;
      }, 1);
    }
  }

  @HostListener('wheel', ['$event'])
  preventScroll(event: WheelEvent): void {
    if (this.checked) {
      event.preventDefault();
    }
  }

  @HostListener('touchmove', ['$event'])
  preventTouchScroll(event: TouchEvent): void {
    if (this.checked) {
      event.preventDefault();
    }
  }
}
