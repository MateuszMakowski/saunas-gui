import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonFullComponent } from '../../shared/components/button-full/button-full.component';
import { ButtonTransparentComponent } from '../../shared/components/button-transparent/button-transparent.component';

@Component({
  selector: 'app-discover',
  standalone: true,
  templateUrl: `./discover.component.html`,
  styleUrl: './discover.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ButtonFullComponent, ButtonTransparentComponent],
})
export class DiscoverComponent {}
