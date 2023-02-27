import { Component, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

@Component({
  selector: 'hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeroSectionComponent {

  @Output() public formEvent = new EventEmitter<any>();
  launchForm: FormGroup;

  @ViewChild('swiper') swiper: SwiperComponent;
  // @ViewChild('bgImg') bgImg: IonImg;

  constructor(
    private formBuilder: FormBuilder
    ) { }

  sliderConfig: SwiperOptions = {
    slidesPerView: 1,
    navigation: true,
  }

  slideImages: any = [
    'assets/images/hero1.png',
    'assets/images/hero2.png',
    'assets/images/hero3.png'
  ];

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
