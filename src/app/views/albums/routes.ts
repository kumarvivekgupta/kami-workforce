import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./albums.component').then(m => m.AlbumsComponent),
    data: {
      title: 'Album List Page'
    }
  }
];

