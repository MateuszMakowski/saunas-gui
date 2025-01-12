import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonTransparentComponent } from '../../../shared/components/button-transparent/button-transparent.component';

@Component({
  selector: 'details-faq',
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
      title: ' Jakie są wymagania dotyczące rezerwacji?',
      content:
        'Tutaj wpisz tekst, który ma się pojawić po naciśnięciu strzałki.',
      isExpanded: false,
    },
    {
      title: 'Jaka jest polityka anulowania?',
      content: 'Treść dla tego pytania.',
      isExpanded: false,
    },
    {
      title: 'Czy podano ręczniki?',
      content: 'Treść dla tego pytania.',
      isExpanded: false,
    },
    {
      title: 'Czy istnieje minimalny wymóg wiekowy?',
      content: 'Treść dla tego pytania.',
      isExpanded: false,
    },
    {
      title: ' Czy mogę przynieść własne jedzenie?',
      content: 'Treść dla tego pytania.',
      isExpanded: false,
    },
  ];

  toggleText(index: number): void {
    this.items[index].isExpanded = !this.items[index].isExpanded;
  }
}
