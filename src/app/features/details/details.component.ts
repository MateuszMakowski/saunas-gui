import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ButtonTransparentComponent } from '../../shared/components/button-transparent/button-transparent.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { ButtonFullComponent } from '../../shared/components/button-full/button-full.component';
import { BlogComponent } from './blog/blog.component';

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
  ],
})
export class DetailsComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  stars = Array(5);
}
