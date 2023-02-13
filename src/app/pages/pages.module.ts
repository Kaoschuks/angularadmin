import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from 'src/app/shared/components/components.module';
import { PrelaunchComponent } from './app-pages/prelaunch/prelaunch.component';

@NgModule({
  declarations: [
  
    PrelaunchComponent
  ],
  imports: [
    CommonModule, 
    ComponentsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
