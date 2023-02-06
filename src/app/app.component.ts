import { Component, OnInit } from '@angular/core';
import { GlobalsService } from './shared/services/core/globals.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'admin';

  constructor(public globals: GlobalsService) {}

  ngOnInit() {
    
  }
}
