import { Component } from '@angular/core';
import { ModalRightComponent } from '../../../shared';

@Component({
  selector: 'filter-modal',
  standalone: true,
  imports: [
    ModalRightComponent
  ],
  templateUrl: './filter-modal.component.html',
  styleUrl: './filter-modal.component.scss'
})
export class FilterModalComponent {

}
