import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app-pages/home/home.component';
import { PrelaunchComponent } from './app-pages/prelaunch/prelaunch.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    redirectTo: 'prelaunch',
    pathMatch: 'full'
  },
  { path: 'prelaunch', component: PrelaunchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
