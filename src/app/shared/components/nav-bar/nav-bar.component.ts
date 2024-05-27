import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';
import { FormsModule } from '@angular/forms';
import { HamburgerComponent } from './hamburger/hamburger.component';

@Component({
  selector: 'nav-bar',
  standalone: true,
  templateUrl: `./nav-bar.component.html`,
  styleUrl: './nav-bar.component.css',
  changeDetection: ChangeDetectionStrategy.Default,
  imports: [CommonModule, RouterModule, FormsModule, HamburgerComponent],
})
export class NavBarComponent {
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

  scrollToContact() {
    const targetElement = document.getElementById('contact');

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
}
