import { NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import {
  NgApexchartsModule,
} from 'ng-apexcharts';

@Component({
  selector: 'donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss'],
  imports: [ NgApexchartsModule, NgIf ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class DonutChartComponent implements OnChanges {
  @Input() width: number = window.innerWidth;
  @Input() height: number = 300;
  @Input() chartLabels: Array<string> = [];
  @Input() chartType: string = 'donut';
  @Input() chartColors: Array<string> = ['#1D70A2', '#eb445a'];
  @Input() chartData: Array<any> = [];
  @Input() showDataLabels: boolean = false; // Toggle dataLabel show/hide - Default is FALSE
  @Input() chartTotalLabel: string = '';
  @Input() showChartTotalLabel: boolean = true; // Toggle dataLabel show/hide - Default is TRUE

  public chartOptions: any;

  ngOnChanges() {
    this.chartOptions = {
      series: this.chartData,
      chart: {
        toolbar: {
          show: false // Hide the toolbar
        },
        height: this.height,
        type: this.chartType,
        // sparkline: {
        //   enabled: this.showChartTotalLabel,
        // },
      },
      labels: this.chartLabels,
      theme: {
        monochrome: {
          enabled: false,
          color: this.chartColors[1],
          shadeTo: 'light',
          shadeIntensity: 0.65
        }
      },
      colors: this.chartColors,
      title: {
        text: this.chartTotalLabel
      },
      dataLabels: {
        style: {
          stroke: 0 // Set the stroke to 0 to remove the border
        }
      },
      legend: {
        show: false // This hides the legend
      }
    };
  }
}
