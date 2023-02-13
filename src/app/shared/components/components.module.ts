import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LoadingComponent } from './ui/loading/loading.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';

import { ErrorComponent } from './ui/error/error.component';
import { NoContentComponent } from './ui/no-content/no-content.component';

import { LaunchingComponent } from './form/launching/launching.component';
import { HeroSectionComponent } from './ui/hero-section/hero-section.component';



export const component: Array<any> = [
	HeaderComponent, FooterComponent,
	WebsiteLayoutComponent, AuthLayoutComponent,
	LoadingComponent,  NoContentComponent, ErrorComponent,
	LaunchingComponent, HeroSectionComponent
	
]

@NgModule({
	declarations: component,
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		NgxSpinnerModule,
		ReactiveFormsModule,
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: component
})
export class ComponentsModule {}
