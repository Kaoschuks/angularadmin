import { Component } from '@angular/core';
import { LoadingComponent, NoContentComponent } from '../../../shared';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NoContentComponent, LoadingComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
