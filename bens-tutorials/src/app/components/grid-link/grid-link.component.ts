import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-grid-link',
  templateUrl: './grid-link.component.html',
  styleUrls: ['./grid-link.component.css'],
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
export class GridLinkComponent implements OnInit {

  
  currentState = 'unhighlighted';
  @Input() imageURL = '';
  @Input() public linkLabel = '';
  @Input() gridIndex = 0;


  constructor(public backendService : BackendService, protected router:Router) { }

  ngOnInit(): void {
  }

  mouseOutState() : void {
    this.currentState = 'unhighlighted';
  }

  mouseInState() : void {
    this.currentState = 'highlighted';
  }
  
  getGridIndex() {
    return this.gridIndex;
  }

  onClick(value:any) {
  }
}
