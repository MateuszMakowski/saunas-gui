import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonFullComponent } from '../../../shared/components/button-full/button-full.component';
import { ButtonTransparentComponent } from '../../../shared/components/button-transparent/button-transparent.component';

@Component({
  selector: 'discover-list',
  standalone: true,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ButtonFullComponent, ButtonTransparentComponent],
})
export class ListComponent {
  public items = [1, 2, 3];
}
