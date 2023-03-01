import { Component } from '@angular/core';

@Component({
  selector: 'prelaunch',
  templateUrl: './prelaunch.component.html',
  styleUrls: ['./prelaunch.component.scss']
})
export class PrelaunchComponent {

  ngOnInit() {

  }

  getStarted(event: any) {
    console.log(event.email)
    console.log(event)
  }

}
