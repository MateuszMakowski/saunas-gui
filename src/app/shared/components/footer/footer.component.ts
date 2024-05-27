import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactComponent } from '../../../features/main/contact/contact.component';
import { VisibilityService } from '../../visibility.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: `./footer.component.html`,
  styleUrl: './footer.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterModule, ContactComponent],
})
export class FooterComponent {
  constructor(public visibilityService: VisibilityService) {}
}
