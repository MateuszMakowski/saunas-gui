import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { RecomendationsComponent } from './recomendations/recomendations.component';
import { DiscoverComponent } from './discover/discover.component';
import { AddPlaceComponent } from './add-place/add-place.component';
import { TrustedByComponent } from './trusted-by/trusted-by.component';

@Component({
  selector: 'app-main',
  standalone: true,
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    HeroComponent,
    BenefitsComponent,
    BlogPostsComponent,
    RecomendationsComponent,
    DiscoverComponent,
    AddPlaceComponent,
    TrustedByComponent,
  ],
})
export class MainComponent {}
