import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'modal-fullscreen',
  templateUrl: './modal-fullscreen.component.html',
  styleUrls: ['./modal-fullscreen.component.scss'],
})
export class ModalFullscreenComponent {
  @Input() id: string = 'right';
  @Input() cssClasses = '';
  @Input() hasHeader: boolean = false
  @Input() hasFooter: boolean = false
}
