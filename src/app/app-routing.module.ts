import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { SidebarLayoutComponent } from './shared/components/layouts/sidebar-layout/sidebar-layout.component';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule), 
    // component: SidebarLayoutComponent, 
    // canLoad: [AuthGuardsService] 
  },
  { 
    path: 'auth', 
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthModule), 
    component: AuthLayoutComponent 
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
