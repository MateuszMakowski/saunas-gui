import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { HeroComponent } from './features/main/hero/hero.component';
import { ButtonTransparentComponent } from './shared/components/button-transparent/button-transparent.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { BenefitsComponent } from './features/main/benefits/benefits.component';
import { BlogPostsComponent } from './features/main/blog-posts/blog-posts.component';
import { RecomendationsComponent } from './features/main/recomendations/recomendations.component';
import { ButtonFullComponent } from './shared/components/button-full/button-full.component';
import { DiscoverComponent } from './features/main/discover/discover.component';
import { AddPlaceComponent } from './features/main/add-place/add-place.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { TrustedByComponent } from './features/main/trusted-by/trusted-by.component';
import { MainComponent } from './features/main/main.component';
import { AgmCoreModule } from '@agm/core';

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
    MainComponent,
    RouterLink,
    RouterModule,
    RouterLinkActive,
  ],
})
export class AppComponent {
  title = 'saunas-gui';
}
