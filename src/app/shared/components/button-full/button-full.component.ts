import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'button-full',
  standalone: true,
  imports: [CommonModule],
  template: `<button>{{ text }}</button>`,
  styleUrl: './button-full.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonFullComponent {
  @Input() text: string = '';
}