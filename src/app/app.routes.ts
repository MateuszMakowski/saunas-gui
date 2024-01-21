import { Routes } from '@angular/router';
import { DiscoverComponent } from './features/discover/discover.component';
import { MainComponent } from './features/main/main.component';
import { DetailsComponent } from './features/details/details.component';
import { AddSpotComponent } from './features/add-spot/add-spot.component';
import { LoginComponent } from './features/login/login.component';
import { SignupComponent } from './features/signup/signup.component';
import { BlogPostComponent } from './features/blog-post/blog-post.component';

export const routes: Routes = [
  { path: '', component: MainComponent, title: 'Główna' },
  { path: 'odkrywaj', component: DiscoverComponent, title: 'Odkrywaj' },
  { path: 'details/:id', component: DetailsComponent, title: 'Szczegóły' },
  { path: 'dodaj-obiekt', component: AddSpotComponent, title: 'Dodaj Miejsce' },
  { path: 'logowanie', component: LoginComponent, title: 'Logowanie' },
  { path: 'rejestracja', component: SignupComponent, title: 'Rejestracja' },
  { path: 'blog', component: BlogPostComponent, title: 'Blog' },
  { path: '**', redirectTo: '' },
];
