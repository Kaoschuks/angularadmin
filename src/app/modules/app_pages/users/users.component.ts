import { AfterViewInit, Component } from '@angular/core';
import { NoContentComponent } from '../../../shared';
import { FilterModalComponent } from '../../modals/filter-modal/filter-modal.component';
import { AlertModalComponent } from '../../modals/alert-modal/alert-modal.component';
declare let $: any, DataTable: any;

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NoContentComponent, FilterModalComponent, AlertModalComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements AfterViewInit {


  ngAfterViewInit() {
    Object.assign(DataTable.defaults, {
      searching: true,
      colReorder: true,
      paginate: true,
      ordering: true,
    });
    new DataTable('#accounttable');
  }
}
