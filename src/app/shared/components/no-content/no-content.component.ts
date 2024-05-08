import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'no-content',
  templateUrl: './no-content.component.html',
  styleUrls: ['./no-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true
})
export class NoContentComponent {
}
