import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/services/backend.service';
import { ArticleGridComponent } from '../article-grid/article-grid.component';

@Component({
  selector: 'app-article-page-back-button',
  templateUrl: './article-page-back-button.component.html',
  styleUrls: ['./article-page-back-button.component.css'],
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

export class ArticlePageBackButtonComponent implements OnInit {
  currentState = 'unhighlighted';
  currentBackLink : string = "";

  constructor(public backendService: BackendService, public router : Router) { }

  ngOnInit(): void {
    
  }

  mouseOutState() : void {
    this.currentState = 'unhighlighted';
  }

  mouseInState() : void {
    this.currentState = 'highlighted';
  }

  onClick_ArticleGrid() {
    this.updateLink();
  }
 
  updateLink() {
    let parameterArray : string[] = this.backendService.getPreviousURLParameters(this.router.url);
    this.router.navigate(parameterArray);
    console.log(this.router.url);
  }

}
