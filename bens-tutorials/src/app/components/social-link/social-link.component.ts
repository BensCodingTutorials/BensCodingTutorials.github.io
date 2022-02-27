import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.css'],
  animations: [
    trigger('highlight', [

      state('unhighlighted', style({
          opacity: 0.5,
      })),

      state('highlighted', style({
          opacity: 1,
      })),

      transition('unhighlighted => highlighted', animate('0.2s')),
      transition('highlighted => unhighlighted', animate('0.2s'))
    ])
  ]
})
export class SocialLinkComponent implements OnInit {
  currentState = 'unhighlighted';

  @Input() public imagePath : string = 'TEST LABEL';
  @Input() public websitePath : string = 'TEST LABEL';

  constructor() { }

  ngOnInit(): void {
  }

  mouseOutState() : void {
    this.currentState = 'unhighlighted';
  }

  mouseInState() : void {
    this.currentState = 'highlighted';
  }
}
