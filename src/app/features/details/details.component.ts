import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { ButtonTransparentComponent } from '../../shared/components/button-transparent/button-transparent.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { ButtonFullComponent } from '../../shared/components/button-full/button-full.component';
import { BlogComponent } from './blog/blog.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    ButtonTransparentComponent,
    RecommendationsComponent,
    FaqComponent,
    ContactComponent,
    ButtonFullComponent,
    BlogComponent,
    RouterModule,
  ],
})
export class DetailsComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0, 0);
    }
  }

  stars = Array(5);
}
