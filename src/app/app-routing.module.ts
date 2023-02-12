import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { WebsiteLayoutComponent } from './shared/components/layouts/website-layout/website-layout.component';

const routes: Routes = [
  { 
    path: '', 
    loadChildren: () => import('./pages/pages.module').then( m => m.PagesModule), 
    component: WebsiteLayoutComponent, 
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
