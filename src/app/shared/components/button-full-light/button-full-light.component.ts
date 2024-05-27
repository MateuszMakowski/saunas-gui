import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'button-full-light',
  standalone: true,
  imports: [CommonModule],
  template: `<button type="submit" [disabled]="disabled">{{ text }}</button>`,
  styleUrl: './button-full-light.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonFullLightComponent {
  @Input() text: string = '';
  @Input() disabled: boolean = false;
}
