import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { ComponentsModule } from '../../components';
import { AuthComponent } from './auth.component';


@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    CommonModule, ComponentsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
