import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { PrelaunchComponent } from './app-pages/prelaunch/prelaunch.component';
import { AboutComponent } from './app-pages/about/about.component';
import { PrivacyPolicyComponent } from './app-pages/privacy-policy/privacy-policy.component';
import { FaqComponent } from './app-pages/faq/faq.component';

@NgModule({
  declarations: [
  
    PrelaunchComponent,
        AboutComponent,
        PrivacyPolicyComponent,
        FaqComponent
  ],
  imports: [
    CommonModule, 
    ComponentsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
