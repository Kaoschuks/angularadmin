import { Component } from '@angular/core';
import { DashboardService } from './services';
import { BarChartComponent, LineChartComponent } from '../../../shared';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    BarChartComponent, LineChartComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent extends DashboardService {

}
