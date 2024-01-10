import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonTransparentComponent } from '../../../shared/components/button-transparent/button-transparent.component';

@Component({
  selector: 'app-benefits',
  standalone: true,
  templateUrl: `./benefits.component.html`,
  styleUrl: './benefits.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ButtonTransparentComponent],
})
export class BenefitsComponent {}
