import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules').then((m) => m.approutes),
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules').then((m) => m.authroutes),
  },
];
