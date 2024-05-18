import { AfterViewInit, Component } from '@angular/core';
declare let $: any, DataTable: any;

@Component({
  selector: 'users-table',
  standalone: true,
  imports: [],
  templateUrl: './users-table.component.html',
  styleUrl: './users-table.component.scss'
})
export class UsersTableComponent implements AfterViewInit {

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
