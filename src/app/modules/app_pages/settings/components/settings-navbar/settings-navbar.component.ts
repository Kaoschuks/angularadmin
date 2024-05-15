import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'settings-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [],
  templateUrl: './settings-navbar.component.html',
  styleUrls: ['./settings-navbar.component.scss'],
})
export class SettingsNavbarComponent {
  d = '';
}
