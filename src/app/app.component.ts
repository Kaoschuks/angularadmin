import { Component, OnInit, inject } from '@angular/core';
import { GlobalsService } from './core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'admin';
  globals: GlobalsService = inject(GlobalsService);

  constructor() {}

  ngOnInit() {
    
  }
}
