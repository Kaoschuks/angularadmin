import { Routes } from '@angular/router';
import { SiderbarLayoutComponent } from '../../shared';

export const approutes: Routes = [
  {
    path: '',
    component: SiderbarLayoutComponent,
    children: [
      {
        path: '',
        data: {
          title: 'dashboard'
        },
        loadComponent: () =>
          import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'dashboard',
        data: {
          title: 'dashboard'
        },
        loadComponent: () =>
          import('./dashboard/dashboard.component').then((m) => m.DashboardComponent),
      },
      {
        path: 'analytics',
        data: {
          title: 'Analytics'
        },
        loadComponent: () =>
          import('./analytics/analytics.component').then((m) => m.AnalyticsComponent),
      },
      {
        path: 'settings',
        data: {
          title: 'App settings'
        },
        loadComponent: () =>
          import('./settings/settings.component').then((m) => m.SettingsComponent),
      },
      {
        path: 'users',
        data: {
          title: 'Users Accounts'
        },
        loadComponent: () =>
          import('./users/users.component').then((m) => m.UsersComponent),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full',
  },
];
