import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { ButtonTransparentComponent } from '../../shared/components/button-transparent/button-transparent.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { ButtonFullComponent } from '../../shared/components/button-full/button-full.component';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';
import { GoogleMapsModule } from '@angular/google-maps';
import { InViewDirective } from '../../directives/in-view.directive';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ButtonTransparentComponent,
    RecommendationsComponent,
    FaqComponent,
    ContactComponent,
    ButtonFullComponent,
    BlogComponent,
    RouterModule,
    GoogleMapsModule,
    InViewDirective,
  ],
})
export class DetailsComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

  hotel = {
    name: 'Luxury Hotel SPA*****',
    location: 'Zakopane, Polska',
    description:
      'Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.',
    amenities: ['Sauna Mokra', 'Sauna Infrared', 'Parking'],
    image: 'assets/spa-1.jpg',
  };

  hours = [
    { day: 'Poniedziałek', open: '09:00', close: '17:00' },
    { day: 'Wtorek', open: '09:00', close: '17:00' },
    { day: 'Środa', open: '09:00', close: '17:00' },
    { day: 'Czwartek', open: '09:00', close: '17:00' },
    { day: 'Piątek', open: '09:00', close: '17:00' },
    { day: 'Sobota', open: null, close: null },
    { day: 'Niedziela', open: null, close: null },
  ];

  prices = [
    { service: 'Usługa 1', price: '100 zł' },
    { service: 'Usługa 2', price: '150 zł' },
    { service: 'Usługa 3', price: '200 zł' },
    { service: 'Usługa 4', price: '250 zł' },
    { service: 'Usługa 5', price: '300 zł' },
  ];
}
