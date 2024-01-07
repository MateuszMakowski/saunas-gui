import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonFullComponent } from '../../shared/components/button-full/button-full.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ButtonFullComponent],
})
export class HeroComponent {}
