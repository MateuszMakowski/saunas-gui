import { Routes } from '@angular/router';
import { DiscoverComponent } from './features/discover/discover.component';
import { MainComponent } from './features/main/main.component';

export const routes: Routes = [
  { path: 'odkrywaj', component: DiscoverComponent, title: 'Odkrywaj' },
  { path: '', component: MainComponent, title: 'Główna' },
  { path: '**', redirectTo: '' },
];
