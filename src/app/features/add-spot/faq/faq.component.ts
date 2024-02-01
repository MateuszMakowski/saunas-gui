import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonTransparentComponent } from '../../../shared/components/button-transparent/button-transparent.component';

@Component({
  selector: 'add-spot-faq',
  standalone: true,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ButtonTransparentComponent],
})
export class FaqComponent {
  isExpanded = false;

  items = [
    {
      title: 'Jak dodać swój obiekt?',
      content:
        'Tutaj wpisz tekst, który ma się pojawić po naciśnięciu strzałki.',
      isExpanded: false,
    },
    {
      title: 'Jakie są wymagania?',
      content: 'Treść dla tego pytania.',
      isExpanded: false,
    },
    {
      title: 'Ile to kosztuje?',
      content: 'Treść dla tego pytania.',
      isExpanded: false,
    },
    {
      title: 'Jak mogę edytować swoją listę?',
      content: 'Treść dla tego pytania.',
      isExpanded: false,
    },
    {
      title: 'Czy użytkownicy mogą zapisać moją saunę?',
      content: 'Treść dla tego pytania.',
      isExpanded: false,
    },
  ];

  toggleText(index: number): void {
    this.items[index].isExpanded = !this.items[index].isExpanded;
  }
}
