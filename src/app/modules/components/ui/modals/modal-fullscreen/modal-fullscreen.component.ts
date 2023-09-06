import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-fullscreen',
  templateUrl: './modal-fullscreen.component.html',
  styleUrls: ['./modal-fullscreen.component.scss']
})
export class ModalFullscreenComponent {
  @Input() id: string = 'right'
}
