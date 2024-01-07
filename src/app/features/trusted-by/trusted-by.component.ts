import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-trusted-by',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./trusted-by.component.html`,
  styleUrl: './trusted-by.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrustedByComponent {}
