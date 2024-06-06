import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'modal-bottom',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './modal-bottom.component.html',
  styleUrl: './modal-bottom.component.scss'
})
export class ModalBottomComponent {
  @Input() id: string = 'bottom';
  @Input() height: string = 'bottom-md';

}
