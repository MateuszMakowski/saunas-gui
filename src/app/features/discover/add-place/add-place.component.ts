import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonFullComponent } from '../../../shared/components/button-full/button-full.component';
import { ButtonTransparentComponent } from '../../../shared/components/button-transparent/button-transparent.component';

@Component({
  selector: 'discover-add-place',
  standalone: true,
  templateUrl: './add-place.component.html',
  styleUrl: './add-place.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ButtonFullComponent, ButtonTransparentComponent],
})
export class AddPlaceComponent {}
