import { Component, Input } from '@angular/core';

@Component({
  selector: 'modal-medium',
  templateUrl: './modal-medium.component.html',
  styleUrls: ['./modal-medium.component.scss'],
})
export class ModalMediumComponent {
  @Input() id: string = 'medium';
}
