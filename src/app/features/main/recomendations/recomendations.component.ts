import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-recomendations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: `./recomendations.component.html`,
  styleUrl: './recomendations.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecomendationsComponent {
  stars = Array(5);
}
