import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomePage {

  ngOnInit() {

  }

  getStarted(event: any) {
    console.log(event.email)
    console.log(event)
  }

 }
