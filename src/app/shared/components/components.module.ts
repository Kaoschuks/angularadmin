import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';

import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LoadingComponent } from './ui/loading/loading.component';
import { SidebarLayoutComponent } from './layouts/sidebar-layout/sidebar-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { ErrorComponent } from './ui/error/error.component';
import { NoContentComponent } from './ui/no-content/no-content.component';

import { LaunchingComponent } from './form/launching/launching.component';



export const component: Array<any> = [
	HeaderComponent, FooterComponent,
	SidebarLayoutComponent, AuthLayoutComponent,
	LoadingComponent,  NoContentComponent, ErrorComponent,
	LaunchingComponent
	
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
