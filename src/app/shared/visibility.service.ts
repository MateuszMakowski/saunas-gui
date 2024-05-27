import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VisibilityService {
  private visibleSource = new BehaviorSubject<boolean>(false);
  public visible$ = this.visibleSource.asObservable();

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.hide();
      }
    });
  }

  show() {
    this.visibleSource.next(true);
  }

  hide() {
    this.visibleSource.next(false);
  }
}
