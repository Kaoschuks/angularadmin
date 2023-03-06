import { Component, ElementRef, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from 'swiper/angular';
// import Swiper core and required modules
import SwiperCore, { Keyboard, Pagination, Navigation, Autoplay } from 'swiper';

SwiperCore.use([Keyboard, Pagination, Navigation, Autoplay]);

@Component({
  selector: 'hero-slider',
  templateUrl: './hero-slider.component.html',
  styleUrls: ['./hero-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HeroSliderComponent {

  @ViewChild('swiper', {static: false}) swiper: SwiperComponent;
  @ViewChild('bgImg') bgImg: ElementRef;

  constructor(
    private renderer: Renderer2
  ) {}

  slideImages: any = [
    'assets/images/hero-1.png',
    'assets/images/hero-2.png',
    'assets/images/hero-3.png'
  ];

  onSlideChange(swiper: any) {
    let activeIndex = this.swiper.swiperRef.realIndex;
    let currentSlide = this.swiper.swiperRef.slides[activeIndex];

    let res = <HTMLElement>currentSlide;
    res.style.overflow = 'hidden';
   
  }

  ngAfterContentChecked() {
    if (this.swiper){
      this.swiper.updateSwiper({});
      this.swiper.swiperRef.autoplay.start();
    }
  }

  slideNext(){
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper.swiperRef.slidePrev(100);
  }

}
