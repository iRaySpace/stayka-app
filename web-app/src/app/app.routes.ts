import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'property-listing',
  },
  {
    path: 'property-listing',
    loadComponent: () => import('./pages/property-listing/property-listing'),
  },
  {
    path: 'property-detail',
    loadComponent: () => import('./pages/property-detail/property-detail'),
  },
];
