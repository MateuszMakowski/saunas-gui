import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { NavBarComponent } from '../../shared/components/nav-bar/nav-bar.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-discover',
  standalone: true,
  templateUrl: './discover.component.html',
  styleUrl: './discover.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    NavBarComponent,
    FooterComponent,
    HeroComponent,
    ListComponent,
    AddPlaceComponent,
    FaqComponent,
    ContactComponent,
  ],
})
export class DiscoverComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }
}
