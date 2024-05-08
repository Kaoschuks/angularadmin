import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app_pages').then((m) => m.routes),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth_pages').then((m) => m.routes),
  },
//   {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full',
//   },
];
