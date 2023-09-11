import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'error-page',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
