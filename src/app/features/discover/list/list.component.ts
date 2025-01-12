import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonFullComponent } from '../../../shared/components/button-full/button-full.component';
import { ButtonTransparentComponent } from '../../../shared/components/button-transparent/button-transparent.component';
import { RouterModule } from '@angular/router';
import { ObiektMiniaturka } from '../../../shared/spot-preview.model';

@Component({
  selector: 'discover-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ButtonFullComponent,
    ButtonTransparentComponent,
    RouterModule,
  ],
})
export class ListComponent {
  items: ObiektMiniaturka[] = [
    {
      id: '1',
      projectName: 'Luksusowy Hotel Spa',
      description:
        'Odkryj relaks w naszym hotelu z saunami fińskimi i tureckimi, położonym w malowniczym regionie górskim.',
      tags: ['sauna', 'spa', 'relaks'],
      imageUrl: './../assets/sample.png',
      location: 'Zakopane, Polska',
      specialOffers: 'Specjalna oferta weekendowa',
      logoUrl: './../assets/logo-hotel-spa.png',
      bookingInfo: 'Rezerwuj teraz',
    },
    {
      id: '2',
      projectName: 'Centrum Wellness i Saun',
      description:
        'Doświadcz wyjątkowego relaksu w naszym centrum wellness, oferującym sauny suche i parowe.',
      tags: ['wellness', 'sauna parowa', 'zdrowie'],
      imageUrl: './../assets/sample.png',
      location: 'Wrocław, Polska',
      specialOffers: 'Rabat 20% na wejścia grupowe',
      logoUrl: './../assets/logo-wellness.png',
      bookingInfo: 'Sprawdź dostępność',
    },
    {
      id: '3',
      projectName: 'Oaza Saun Miejskich',
      description:
        'Zapraszamy do miejskiej oazy relaksu z nowoczesnymi saunami i strefą odpoczynku.',
      tags: ['sauna miejska', 'relaks', 'nowoczesność'],
      imageUrl: './../assets/sample.png',
      location: 'Kraków, Polska',
      specialOffers: 'Karta stałego klienta z bonusami',
      logoUrl: './../assets/logo-city-sauna.png',
      bookingInfo: 'Zarezerwuj online',
    },
  ];

  displayedItems: ObiektMiniaturka[] = [];
  itemsToShow = 2;
  constructor() {
    this.loadMoreItems();
  }

  loadMoreItems(): void {
    this.displayedItems = this.items.slice(0, this.itemsToShow);
    this.itemsToShow += 2;
  }
}
