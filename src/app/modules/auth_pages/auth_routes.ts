import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
      },
    ],
  },
//   {
//     path: '',
//     redirectTo: '/home',
//     pathMatch: 'full',
//   },
];
