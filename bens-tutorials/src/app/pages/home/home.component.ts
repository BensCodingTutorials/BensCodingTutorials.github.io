import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from 'src/app/animations/fade-in';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''}
})
export class HomeComponent implements OnInit {
  topicsArray: any;

  constructor() { 
  
  }

  ngOnInit(): void {
  }
}
