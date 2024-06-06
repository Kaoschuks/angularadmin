import { NgClass } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports:[
    NgClass
  ]
})
export class HeaderComponent implements OnInit {
  @Input() title!: string
  @Input() color!: string

  ngOnInit(): void {
    console.log(this.color)
  }
}
