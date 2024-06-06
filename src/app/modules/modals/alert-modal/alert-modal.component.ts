import { Component, Input } from '@angular/core';
import { ModalSmallComponent } from '../../../shared';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'alert-modal',
  standalone: true,
  imports: [
    ModalSmallComponent, TitleCasePipe
  ],
  templateUrl: './alert-modal.component.html',
  styleUrl: './alert-modal.component.scss'
})
export class AlertModalComponent {
  @Input() id: string = 'alert'
  @Input() title!: string
  @Input() message!: string
  @Input() actionBtnTxt!: string
}
