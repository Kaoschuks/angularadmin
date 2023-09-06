import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    // canActivate: [AuthGuardsService],
    loadChildren: () => import("./application_pages/application.module").then( (m) => m.ApplicationModule ),
  },
  {
    path: 'auth',
    loadChildren: () => import('./authentication_pages/auth.module').then(m => m.AuthModule)
  },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
