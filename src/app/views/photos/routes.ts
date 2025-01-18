import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./photos.component').then(m => m.PhotosComponent),
    data: {
      title: 'Photo List Page'
    }
  }
];

