import { Component } from '@angular/core';
import { BarChartComponent, LineChartComponent } from '../../../shared';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [
    BarChartComponent, LineChartComponent
  ],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {

}
