import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InViewDirective } from '../../../directives/in-view.directive';

@Component({
  selector: 'app-place-list',
  standalone: true,
  imports: [CommonModule, InViewDirective],
  templateUrl: './place-list.component.html',
  styleUrl: './place-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlaceListComponent {
  hotels = [
    {
      name: 'Luxury Hotel SPA*****',
      location: 'Zakopane, Polska',
      description:
        'Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.',
      amenities: ['Sauna Mokra', 'Sauna Infrared', 'Parking'],
      image: 'assets/spa-1.jpg',
    },
    {
      name: 'Mountain View Retreat',
      location: 'Tatry, Polska',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ante vel purus tempor varius. Fusce dignissim, metus a pharetra ultrices, urna velit pharetra magna, nec sollicitudin turpis justo sit amet nulla.',
      amenities: ['Indoor Pool', 'Gym', 'Restaurant'],
      image: 'assets/spa-1.jpg',
    },
    {
      name: 'Forest Hideaway Spa Resort',
      location: 'Bieszczady, Polska',
      description:
        'Nulla facilisi. Mauris et nulla urna. Sed tristique ligula id ipsum semper, eu faucibus libero ullamcorper. Duis tristique orci vitae malesuada vestibulum. Ut vitae ipsum eu sapien fringilla pharetra.',
      amenities: ['Outdoor Jacuzzi', 'Hiking Trails', 'Spa Treatments'],
      image: 'assets/spa-1.jpg',
    },
    {
      name: 'Luxury Hotel SPA*****',
      location: 'Zakopane, Polska',
      description:
        'Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.',
      amenities: ['Sauna Mokra', 'Sauna Infrared', 'Parking'],
      image: 'assets/spa-1.jpg',
    },
    {
      name: 'Mountain View Retreat',
      location: 'Tatry, Polska',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae ante vel purus tempor varius. Fusce dignissim, metus a pharetra ultrices, urna velit pharetra magna, nec sollicitudin turpis justo sit amet nulla.',
      amenities: ['Indoor Pool', 'Gym', 'Restaurant'],
      image: 'assets/spa-1.jpg',
    },
    {
      name: 'Forest Hideaway Spa Resort',
      location: 'Bieszczady, Polska',
      description:
        'Nulla facilisi. Mauris et nulla urna. Sed tristique ligula id ipsum semper, eu faucibus libero ullamcorper. Duis tristique orci vitae malesuada vestibulum. Ut vitae ipsum eu sapien fringilla pharetra.',
      amenities: ['Outdoor Jacuzzi', 'Hiking Trails', 'Spa Treatments'],
      image: 'assets/spa-1.jpg',
    },
    {
      name: 'Forest Hideaway Spa Resort',
      location: 'Bieszczady, Polska',
      description:
        'Nulla facilisi. Mauris et nulla urna. Sed tristique ligula id ipsum semper, eu faucibus libero ullamcorper. Duis tristique orci vitae malesuada vestibulum. Ut vitae ipsum eu sapien fringilla pharetra.',
      amenities: ['Outdoor Jacuzzi', 'Hiking Trails', 'Spa Treatments'],
      image: 'assets/spa-1.jpg',
    },
    {
      name: 'Forest Hideaway Spa Resort',
      location: 'Bieszczady, Polska',
      description:
        'Nulla facilisi. Mauris et nulla urna. Sed tristique ligula id ipsum semper, eu faucibus libero ullamcorper. Duis tristique orci vitae malesuada vestibulum. Ut vitae ipsum eu sapien fringilla pharetra.',
      amenities: ['Outdoor Jacuzzi', 'Hiking Trails', 'Spa Treatments'],
      image: 'assets/spa-1.jpg',
    },
  ];

  visibleHotels = 3; // Liczba początkowych hoteli do wyświetlenia

  loadMore(): void {
    this.visibleHotels += 3; // Dodajemy kolejne 3 hotele do widoku
  }

  calculateSectionHeight(): string {
    const baseHeight = 500; // Domyślna wysokość sekcji
    const perHotelHeight = 300; // Wysokość dla każdego hotelu
    const totalHeight = baseHeight + perHotelHeight * this.visibleHotels;
    return `${totalHeight}px`;
  }

  shouldShowLoadMoreButton(): boolean {
    return this.visibleHotels < this.hotels.length;
  }
}
