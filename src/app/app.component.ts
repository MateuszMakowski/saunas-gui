import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './features/hero/hero.component';
import { ButtonTransparentComponent } from './shared/components/button-transparent/button-transparent.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { BenefitsComponent } from './features/benefits/benefits.component';
import { BlogPostsComponent } from './features/blog-posts/blog-posts.component';
import { RecomendationsComponent } from './features/recomendations/recomendations.component';
import { ButtonFullComponent } from './shared/components/button-full/button-full.component';
import { DiscoverComponent } from './features/discover/discover.component';
import { AddPlaceComponent } from './features/add-place/add-place.component';
import { TrustedByComponent } from './features/trusted-by/trusted-by.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    HeroComponent,
    ButtonTransparentComponent,
    NavBarComponent,
    BenefitsComponent,
    BlogPostsComponent,
    RecomendationsComponent,
    ButtonFullComponent,
    DiscoverComponent,
    AddPlaceComponent,
    TrustedByComponent,
    FooterComponent,
  ],
})
export class AppComponent {
  title = 'saunas-gui';
}
