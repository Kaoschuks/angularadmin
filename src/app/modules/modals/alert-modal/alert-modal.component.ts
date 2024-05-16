import { Component } from '@angular/core';
import { ModalSmallComponent } from '../../../shared';

@Component({
  selector: 'alert-modal',
  standalone: true,
  imports: [
    ModalSmallComponent
  ],
  templateUrl: './alert-modal.component.html',
  styleUrl: './alert-modal.component.scss'
})
export class AlertModalComponent {

}
