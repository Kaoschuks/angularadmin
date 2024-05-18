import { Component } from '@angular/core';
import { NoContentComponent } from '../../../shared';
import { FilterModalComponent } from '../../modals/filter-modal/filter-modal.component';
import { AlertModalComponent } from '../../modals/alert-modal/alert-modal.component';
import { UsersTableComponent } from './components';
import { UsersAccessnavComponent } from './components/users-accessnav/users-accessnav.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UsersTableComponent, UsersAccessnavComponent,
    NoContentComponent, FilterModalComponent, AlertModalComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
}
