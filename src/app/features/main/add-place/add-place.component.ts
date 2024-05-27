import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonTransparentComponent } from '../../../shared/components/button-transparent/button-transparent.component';
import { ButtonFullComponent } from '../../../shared/components/button-full/button-full.component';

@Component({
  selector: 'app-add-place',
  standalone: true,
  templateUrl: `./add-place.component.html`,
  styleUrl: './add-place.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ButtonTransparentComponent, ButtonFullComponent],
})
export class AddPlaceComponent {}
