import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app-pages/home/home.component';
import { PrelaunchComponent } from './app-pages/prelaunch/prelaunch.component';
import { FaqComponent } from './app-pages/faq/faq.component';
import { AboutComponent } from './app-pages/about/about.component';
import { PrivacyPolicyComponent } from './app-pages/privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // {
  //   path: '',
  //   redirectTo: 'prelaunch',
  //   pathMatch: 'full'
  // },
  { path: 'prelaunch', component: PrelaunchComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'about', component: AboutComponent},
  { path: 'privacy-policy', component: PrivacyPolicyComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
