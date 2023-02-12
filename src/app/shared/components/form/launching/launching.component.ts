import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'launching-form',
  templateUrl: './launching.component.html',
  styleUrls: ['./launching.component.scss']
})
export class LaunchingComponent {

  @Output() public emailEvent = new EventEmitter<any>();
  launchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
    ) { }

  ngOnInit() {
    this.launchForm = this.formBuilder.group({
          firstname: ['', [Validators.required]],
          lastname: ['', [Validators.required]],
          email: ['', [Validators.required, Validators.email]]
    });
  }

  // form field getter
  get f() { return this.launchForm.controls; }

  signupEmail() {
    console.log(this.launchForm.value);
      if(this.launchForm.invalid) { 
        return;
      } else {
        this.emailEvent.emit({email: this.launchForm.value});
      }
  }

}
