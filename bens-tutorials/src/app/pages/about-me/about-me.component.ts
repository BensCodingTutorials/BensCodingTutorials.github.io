import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations/fade-in';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
