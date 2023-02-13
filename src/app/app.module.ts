import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesModule } from './shared/services/services.module';
import { HomeComponent } from './pages/app-pages/home/home.component';
import { HeaderOldComponent } from './components/ui/header-old/header-old.component';
import { ComponentsModule } from './shared/components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderOldComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, CommonModule,
    FormsModule, ReactiveFormsModule, ServicesModule,
    NgxSpinnerModule, AppRoutingModule, ComponentsModule
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
