import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'modal-right',
  templateUrl: './modal-right.component.html',
  styleUrls: ['./modal-right.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgClass
  ]
})
export class ModalRightComponent {
  @Input() id: string = 'right';
  @Input() width: string = 'right-md';
}
