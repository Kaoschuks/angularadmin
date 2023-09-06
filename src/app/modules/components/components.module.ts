import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NgxSpinnerModule } from 'ngx-spinner';
import { SwiperModule } from "swiper/angular";

import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LoadingComponent } from './ui/loading/loading.component';

import { ErrorComponent } from './ui/error/error.component';
import { SidebarComponent } from './ui/sidebar/sidebar.component';
import { NoContentComponent } from './ui/no-content/no-content.component';
import { ModalRightComponent } from './ui/modals/modal-right/modal-right.component';
import { ModalFullscreenComponent } from './ui/modals/modal-fullscreen/modal-fullscreen.component';
import { ModalComponent } from './ui/modals/modal/modal.component';


export const component: Array<any> = [
	HeaderComponent, FooterComponent, SidebarComponent,
	LoadingComponent,  NoContentComponent, ErrorComponent,
	ModalRightComponent, ModalFullscreenComponent, ModalComponent
	
]

@NgModule({
	declarations: component,
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		NgxSpinnerModule,
		ReactiveFormsModule,
		SwiperModule,		
	],
	schemas: [CUSTOM_ELEMENTS_SCHEMA],
	exports: component
})
export class ComponentsModule {}
