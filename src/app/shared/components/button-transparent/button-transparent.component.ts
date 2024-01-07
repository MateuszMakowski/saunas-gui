import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'button-transparent',
  standalone: true,
  imports: [CommonModule],
  template: `<button>{{ text }}</button>`,
  styleUrl: './button-transparent.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonTransparentComponent {
  @Input() text: string = '';
}
