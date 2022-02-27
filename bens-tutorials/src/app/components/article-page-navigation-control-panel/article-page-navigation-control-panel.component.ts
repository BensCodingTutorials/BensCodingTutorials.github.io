import { Component, Input, OnInit } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { BackendService } from 'src/app/services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-page-navigation-control-panel',
  templateUrl: './article-page-navigation-control-panel.component.html',
  styleUrls: ['./article-page-navigation-control-panel.component.css'], 
  animations: [
    trigger('highlight_left', [

        state('unhighlighted_left', style({
            opacity: 0.5,
        })),

        state('highlighted_left', style({
            opacity: 1,
        })),

        transition('unhighlighted_left => highlighted_left', animate('0.2s')),
        transition('highlighted_left => unhighlighted_left', animate('0.2s'))
    ]),

    trigger('highlight_right', [

      state('unhighlighted_right', style({
          opacity: 0.5,
      })),

      state('highlighted_right', style({
          opacity: 1,
      })),

      transition('unhighlighted_right => highlighted_right', animate('0.2s')),
      transition('highlighted_right => unhighlighted_right', animate('0.2s'))
    ]),

    trigger('highlight_middle', [

      state('unhighlighted_middle', style({
          opacity: 0.5,
      })),

      state('highlighted_middle', style({
          opacity: 1,
      })),

      transition('unhighlighted_middle => highlighted_middle', animate('0.2s')),
      transition('highlighted_middle => unhighlighted_middle', animate('0.2s'))
    ])
  ]
})
export class ArticlePageNavigationControlPanelComponent implements OnInit {
  currentState_left = 'unhighlighted_left';
  currentState_right = 'unhighlighted_right';
  currentState_middle = 'unhighlighted_middle';
  @Input() previousArticleName : string = "";
  @Input() nextArticleName : string = "";
  @Input() articlePage: any;

  constructor(public backendService: BackendService, public router : Router) { }

  ngOnInit(): void {
  }

  mouseOutState_left() : void {
    this.currentState_left = 'unhighlighted_left';
  }

  mouseInState_left() : void {
    this.currentState_left = 'highlighted_left';
  }

  mouseOutState_right() : void {
    this.currentState_right = 'unhighlighted_right';
  }

  mouseInState_right() : void {
    this.currentState_right = 'highlighted_right';
  }

  mouseOutState_middle() : void {
    this.currentState_middle = 'unhighlighted_middle';
  }

  mouseInState_middle() : void {
    this.currentState_middle = 'highlighted_middle';
  }

  updateLink_Previous() {
    let parameterArray : string[] = this.backendService.getURLParameters(this.router.url);
    parameterArray[3] = this.previousArticleName;
    this.router.navigate(parameterArray);
    this.articlePage.getArticleFromURLParametersArray(parameterArray);
    this.articlePage.resetAnimationCSS();
    // this.articlePage.changeAnimationState("page_IN");
  }

  updateLink_Next() {
    let parameterArray : string[] = this.backendService.getURLParameters(this.router.url);
    parameterArray[3] = this.nextArticleName;
    this.router.navigate(parameterArray);
    this.articlePage.getArticleFromURLParametersArray(parameterArray);
    this.articlePage.resetAnimationCSS();
    // this.articlePage.changeAnimationState("page_OUT");
  }

  updateLinkToSeriesLink() {
    let parameterArray : string[] = this.backendService.getPreviousURLParameters(this.router.url);
    this.router.navigate(parameterArray);
    // this.articlePage.changeAnimationState("page_OUT");
  }

  
}
