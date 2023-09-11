import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
