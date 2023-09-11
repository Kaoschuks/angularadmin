import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
