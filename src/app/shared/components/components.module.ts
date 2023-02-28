import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SwiperModule } from "swiper/angular";

import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { LoadingComponent } from './ui/loading/loading.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { WebsiteLayoutComponent } from './layouts/website-layout/website-layout.component';

import { ErrorComponent } from './ui/error/error.component';
import { NoContentComponent } from './ui/no-content/no-content.component';

import { LaunchingComponent } from './form/launching/launching.component';
import { HeroSectionComponent } from './ui/hero-section/hero-section.component';
import { TopHeaderComponent } from './ui/top-header/top-header.component';
import { HeroSliderComponent } from './ui/hero-slider/hero-slider.component';



export const component: Array<any> = [
	HeaderComponent, FooterComponent,
	WebsiteLayoutComponent, AuthLayoutComponent,
	LoadingComponent,  NoContentComponent, ErrorComponent,
	LaunchingComponent, TopHeaderComponent, HeroSectionComponent, HeroSliderComponent
	
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
