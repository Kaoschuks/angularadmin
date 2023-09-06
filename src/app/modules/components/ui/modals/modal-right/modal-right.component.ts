import { Component, Input } from '@angular/core';

@Component({
  selector: 'modal-right',
  templateUrl: './modal-right.component.html',
  styleUrls: ['./modal-right.component.scss']
})
export class ModalRightComponent {
  @Input() id: string = 'right'
}
