import { Component, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeroSectionComponent {

  @Output() public formEvent = new EventEmitter<any>();
  
  launchForm = new FormGroup(
    {
      email: new FormControl(null, [Validators.email, Validators.required])
    }
  );

  constructor() { }

  ngOnInit() { }

  // form field getter
  get f() { return this.launchForm.controls; }

  signupEmail() {
      if(this.launchForm.invalid) {
        return;
      } else {
        this.formEvent.emit({email: this.launchForm.value.email});
      }
  }

}
