import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ArticleGridComponent } from '../article-grid/article-grid.component';

@Component({
  selector: 'app-content-page-indicator',
  templateUrl: './content-page-indicator.component.html',
  styleUrls: ['./content-page-indicator.component.css'],
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
    ])
  ]
})

export class ContentPageIndicatorComponent implements OnInit {

  public currentPage : number = 0;
  public pageTotal : number = 0;
  currentState_left = 'unhighlighted_left';
  currentState_right = 'unhighlighted_right';
  private articleGrid : any;

  constructor(public backendService : BackendService) { }

  ngOnInit(): void {
    this.backendService.injectContentPageIndicatorComponent(this);
  }

  public getCurrentPage() : number {
    return this.currentPage;
  }

  public setCurrentPage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  
  public getPageTotal() : number {
    return this.pageTotal;
  }

  public setPageTotal(pageCount: number) {
    this.pageTotal = pageCount;
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

  onClick_LeftButton(value:any) {
    if(this.currentPage > 0) {
      this.currentPage += -1;
      //YOU NEED TO UPDATE THE METHOD BELOW TO SUPPORT DIFFERENT TYPES OF GRID THINGS>
      if(this.articleGrid.currentGridMode === "topic") {
        this.articleGrid.changeGridTopicsByPage(this.currentPage);
      } else if (this.articleGrid.currentGridMode === "series") {
        this.articleGrid.changeGridSeriesByPage(this.currentPage);
      } else if (this.articleGrid.currentGridMode === "article") {
        this.articleGrid.changeGridArticlesByPage(this.currentPage);
      }
    }
  }

  onClick_RightButton(value:any) {
    if(this.currentPage < this.pageTotal - 1) {
      this.currentPage += 1;
      console.log(this.articleGrid);
      //YOU NEED TO UPDATE THE METHOD BELOW TO SUPPORT DIFFERENT TYPES OF GRID THINGS>
      if(this.articleGrid.currentGridMode === "topic") {
        this.articleGrid.changeGridTopicsByPage(this.currentPage);
      } else if (this.articleGrid.currentGridMode === "series") {
        this.articleGrid.changeGridSeriesByPage(this.currentPage);
      } else if (this.articleGrid.currentGridMode === "article") {
        this.articleGrid.changeGridArticlesByPage(this.currentPage);
      }
    }
  }

  public injectDependencies(articleGridComponent:ArticleGridComponent) {
    this.articleGrid = articleGridComponent;
  }
}
