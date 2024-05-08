import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';
import { FooterComponent } from '../../footer/footer.component';
import { GlobalsService } from '../../../services';
import { NgIf, TitleCasePipe } from '@angular/common';
import { SidebarComponent } from '../../sidebar/sidebar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-siderbar-layout',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterOutlet, SidebarComponent, TitleCasePipe, NgIf],
  templateUrl: './siderbar-layout.component.html',
  styleUrl: './siderbar-layout.component.scss'
})
export class SiderbarLayoutComponent {
  globals: GlobalsService = inject(GlobalsService);

}
