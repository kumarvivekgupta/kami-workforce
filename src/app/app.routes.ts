import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'posts',
        loadChildren: () => import('./views/posts/routes').then((m) => m.routes)
      },
      {
        path: 'albums',
        loadChildren: () => import('./views/albums/routes').then((m) => m.routes)
      },
      {
        path: 'photos',
        loadChildren: () => import('./views/photos/routes').then((m) => m.routes)
      },
      {
        path: 'users/:id',
        loadChildren: () => import('./views/user/routes').then((m) => m.routes)
      },
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];
