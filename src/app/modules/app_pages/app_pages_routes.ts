import { Routes } from '@angular/router';
import { SiderbarLayoutComponent } from '../../shared';

export const routes: Routes = [
  {
    path: '',
    component: SiderbarLayoutComponent,
    children: [
      {
        path: '',
        data: {
          title: 'Home'
        },
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'dashboard',
        data: {
          title: 'dashboard'
        },
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
