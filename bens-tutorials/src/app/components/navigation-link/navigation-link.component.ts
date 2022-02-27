import { Component, Input, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-navigation-link',
  templateUrl: './navigation-link.component.html',
  styleUrls: ['./navigation-link.component.css'],
  animations: [ // trigger name for attaching this animation to an element using the [@triggerName] syntax
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
 

export class NavigationLinkComponent implements OnInit {

  currentState = 'unhighlighted';

  @Input() public label : string = 'TEST LABEL';
  @Input() public routerLinkPath : string = 'TEST LABEL';

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