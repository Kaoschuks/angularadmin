import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './application-routing.module';
import { ApplicationPage } from './application.page';
import { ComponentsModule } from '../../components';
import { HomePage } from './home/home.component';
import { PostsCategoriesComponent } from './posts/posts-categories/posts-categories.component';
import { PostsComponent } from './posts/posts/posts.component';

export const pages: any = [
  ApplicationPage,
  HomePage,
  PostsCategoriesComponent, PostsComponent
]

@NgModule({
  declarations: pages,
  imports: [
    CommonModule, 
    ComponentsModule,
    ApplicationsRoutingModule
  ],
  exports: pages,
})
export class ApplicationModule { }
