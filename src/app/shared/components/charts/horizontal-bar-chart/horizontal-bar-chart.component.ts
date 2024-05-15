import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit } from "@angular/core";
declare var window: any;

@Component({
  selector: "horizontal-bar-chart",
  templateUrl: "./horizontal-bar-chart.component.html",
  styleUrls: ["./horizontal-bar-chart.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class HorizontalBarChartComponent implements OnChanges {
  @Input() width: number = window.innerWidth;
  @Input() title!: string;
  @Input() currency!: string;
  @Input() showLabels: boolean = false;
  @Input() data: Array<any> = [
    {
      name: "Expenses",
      value: 66,
      color: "#ff6384",
    },
    {
      name: "Income",
      value: 14,
      color: "#ff9f40",
    }
  ]
  chartData: any = {
    title: null,
    categories: [],
  };

  ngOnChanges() {
    this.chartData["title"] = this.title;
    this.chartData["categories"] = this.data;
    this.data.length > 0 && window.initSteppedProgress(this.chartData);
    this.setActive()

    if(!this.showLabels) this.hideElement('syncro-row');
    if(!this.title) this.hideElement()
  }

  setActive() {
    const arr: any = document.getElementsByClassName('syncro-progress-stepped-item')
    if(arr) {
      arr[0].classList.add("active");
      arr[0].innerHTML = `${this.currency} ${this.data[0].value}`;
    }
  }

  hideElement(classname: string = 'syncro-card-title') {
    const elem: any = document.getElementsByClassName(classname);
    if(elem) {
      for (var i = 0; i < elem.length; i++) {
        elem[i].style.display = "none";
      }
    }
  }
}
