import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'modal-small',
  templateUrl: './modal-small.component.html',
  styleUrls: ['./modal-small.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgClass
  ]
})
export class ModalSmallComponent {
  @Input() id = 'small';
}
