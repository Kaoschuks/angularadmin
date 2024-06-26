import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { GlobalsService } from './shared';
import { CommonModule } from '@angular/common';
import { FilterModalComponent } from './modules/modals/filter-modal/filter-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSpinnerModule, CommonModule, FilterModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'base';
  globals: GlobalsService = inject(GlobalsService);

  async ngOnInit() {
    await this.globals.initializeApp()
  }
}
