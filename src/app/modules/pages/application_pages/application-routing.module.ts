import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationPage } from './application.page';
import { HomePage } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '',
    component: ApplicationPage,
    children: [
      {
        path: 'home',
        data: { title: 'Home' },
        component: HomePage
      },
      // {
      //   path: 'posts',
      //   children: [
      //     {
      //       path: 'categories',
      //       data: { title: 'Posts Categories' },
      //       component: PostsCategoriesComponent
      //     },
      //     {
      //       path: 'all',
      //       data: { title: 'All Posts' },
      //       component: PostsComponent
      //     },
      //   ]
      // },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
