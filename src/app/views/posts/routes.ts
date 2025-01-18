import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./posts.component').then(m => m.PostsComponent),
    data: {
      title: 'Post List Page'
    }
  }
];

