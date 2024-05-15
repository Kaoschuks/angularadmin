import { Component, inject } from '@angular/core';
import { NgIf, TitleCasePipe } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent, FooterComponent, SidebarComponent, BreadcrumbComponent } from '../../../components';
import { GlobalsService } from '../../../../core/services';

@Component({
  selector: 'app-siderbar-layout',
  standalone: true,
  imports: [
    HeaderComponent, FooterComponent, BreadcrumbComponent,
    RouterOutlet, SidebarComponent, TitleCasePipe, NgIf
  ],
  templateUrl: './siderbar-layout.component.html',
  styleUrl: './siderbar-layout.component.scss'
})
export class SiderbarLayoutComponent {
  globals: GlobalsService = inject(GlobalsService);

}
