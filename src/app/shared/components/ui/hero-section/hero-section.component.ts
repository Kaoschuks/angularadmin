import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {

  @Output() public formEvent = new EventEmitter<any>();
  launchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.launchForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email]]
    });
  }

  // form field getter
  get f() { return this.launchForm.controls; }

  signupEmail() {
      if(this.launchForm.invalid) {
        return;
      } else {
        this.formEvent.emit({form: this.launchForm.value});
      }
  }

}
