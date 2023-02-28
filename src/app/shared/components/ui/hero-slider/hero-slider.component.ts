import { Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
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

  // sliderConfig: SwiperOptions = {
  //   slidesPerView: 1,
  //   spaceBetween: 0,
  //   navigation: {
  //     enabled: true,
  //   }
  // }

  slideImages: any = [
    'assets/images/hero-1.png',
    'assets/images/hero-2.png',
    'assets/images/hero-3.png'
  ];

  onSlideChange(swiper: any) {
    // this.bgImg.nativeElement.src = this.slideImages[this.swiper.swiperRef.activeIndex];
    // if (swiper[0].isBeginning) {
    //   this.swiper.swiperRef.allowSlidePrev = false;
    //   this.swiper.swiperRef.allowSlideNext = true;
    // } else if (swiper[0].isEnd) {
    //   this.swiper.swiperRef.allowSlidePrev = true;
    // } else {
    //   this.swiper.swiperRef.allowSlideNext = true;
    //   this.swiper.swiperRef.allowSlidePrev = true;
    // }
  }

  ngAfterContentChecked() {
    if (this.swiper){
      this.swiper.updateSwiper({});
      this.swiper.swiperRef.autoplay.start();
    }
  }

  // nextSlide() {
  //   this.swiper.swiperRef.slideNext();
  // }

  // prevSlide() {
  //   this.swiper.swiperRef.slidePrev();
  // }

  slideNext(){
    this.swiper.swiperRef.slideNext(100);
  }
  slidePrev(){
    this.swiper.swiperRef.slidePrev(100);
  }

}
