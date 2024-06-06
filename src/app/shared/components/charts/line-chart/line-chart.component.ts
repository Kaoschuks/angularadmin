import { NgIf } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle,
  ChartComponent,
  NgApexchartsModule,
} from 'ng-apexcharts';
declare var window: any;

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  imports: [ NgApexchartsModule, NgIf ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class LineChartComponent implements OnInit {
  @Input() width: number = window.innerWidth;
  @Input() height: number = 300;
  @Input() hasTooltip: boolean = false;
  @Input() chartTitle: string = '';
  @Input() chartType: string = 'line';
  @Input() chartColors: string[] = ['#f7c1c1', '#9cd9fe'];
  @Input() chartLabels: Array<string> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  @Input() chartSeries: Array<any> = [{
    name: 'Debit',
    data: [70, 91, 25, 100, 49, 60, 70, 91, 25, 100, 0, 12]
  }
  ];

  @Input() showXaxisLabels: boolean = false; // Toggle xaxis label - Default is TRUE
  @Input() showYaxisLabels: boolean = false; // Toggle yaxis label - Default is TRUE
  @Input() showDataLabels: boolean = false; // Toggle dataLabel show/hide - Default is TRUE

  @ViewChild('chart') chart: ChartComponent | any;

  public reducedWindowWidth: any;

  public chartOptions: any

  constructor() { }

  ngOnInit() {
    this.chartOptions = {
      chart: {
        toolbar: {
          show: false // Hide the toolbar
        },
        type: this.chartType,
        height: this.height,
        sparkline: {
          enabled: false,
        },
      },
      grid: {
        show: false
      },
      series: this.chartSeries,
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false // This hides the legend
      },
      stroke: {
        width: 2,
        colors: this.chartColors,
      },
      fill: {
        colors: this.chartColors,
        gradient: {
          gradientToColors: this.chartColors,
          opacityTo: 0.2,
        },
      },
      tooltip: {
        theme: 'dark',
        x: {
          show: false,
        },
      },
      yaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: this.showYaxisLabels,
          style: {
            colors: '#78909c',
          },
        },
      },
      xaxis: {
        labels: {
          show: this.showXaxisLabels,
          style: {
            colors: '#78909c',
          },
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        categories: this.chartLabels,
      },
      colors: this.chartColors,
    };
    if (this.hasTooltip) this.chartOptions['annotations'] = {
      points: [
        {
          x: 'Oct',
          y: 100,
          marker: {
            size: 4,
            fillColor: this.chartColors[0],
            strokeColor: this.chartColors[0],
            strokeWidth: 2,
            shape: 'circle',
            radius: 2
          },
          label: {
            borderColor: this.chartColors,
            offsetY: 0,
            style: {
              color: '#000000',
              background: this.chartColors[0]
            },
            text: 'Budget Surpassed'
          }
        }
      ]
    }
  }


}
