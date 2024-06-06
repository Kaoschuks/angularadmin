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
      layout: {
          topStart: {
              buttons: ['copy', 'pdf', 'colvis']
          }
      },
      searching: true,
      colReorder: true,
      paginate: true,
      ordering: true,
      autoWidth: !1,
      responsive: true,
      lengthMenu: [[10, 15, 30, 45, -1], ["10 Rows", "15 Rows", "30 Rows", "45 Rows", "Everything"]],
      language: {
          searchPlaceholder: "Search for records..."
      },
      sDom: '<"dataTables__top"lfB>rt<"dataTables__bottom"ip><"clear">',
      buttons: [{
          extend: "excelHtml5",
          title: "Export Data"
      }, {
          extend: "csvHtml5",
          title: "Export Data"
      }, {
          extend: "print",
          title: "Material Admin"
      }],
      initComplete: (a: any, b: any) => {
          $(this).closest(".dataTables_wrapper").find(".dataTables__top").prepend('<div class="dataTables_buttons hidden-sm-down actions"><span class="actions__item zmdi zmdi-print" data-table-action="print" /><span class="actions__item zmdi zmdi-fullscreen" data-table-action="fullscreen" /><div class="dropdown actions__item"><i data-toggle="dropdown" class="zmdi zmdi-download" /><ul class="dropdown-menu dropdown-menu-right"><a href="" class="dropdown-item" data-table-action="excel">Excel (.xlsx)</a><a href="" class="dropdown-item" data-table-action="csv">CSV (.csv)</a></ul></div></div>')
      }
    });
    new DataTable('#accounttable');
  }

}
