import { Component } from '@angular/core';
import { SettingsNavbarComponent } from './components';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [
    SettingsNavbarComponent
  ],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

}
