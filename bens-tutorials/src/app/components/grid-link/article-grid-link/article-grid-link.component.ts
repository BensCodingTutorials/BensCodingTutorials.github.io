import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/dataClasses/article';
import { BackendService } from 'src/app/services/backend.service';
import { GridLinkComponent } from '../grid-link.component';

@Component({
  selector: 'app-article-grid-link',
  templateUrl: './article-grid-link.component.html',
  styleUrls: ['./article-grid-link.component.css']
})

export class ArticleGridLinkComponent extends GridLinkComponent implements OnInit {
  @Input() article = new Article();
  @Output() articleSelected = new EventEmitter<number>();

  constructor(backendService : BackendService, router:Router) { 
    super(backendService, router);
  }

  override ngOnInit(): void {
    
  }

  override onClick(value:any) {
    this.backendService.setCurrentlySelectedArticle(this.article);
    this.backendService.setBackButtonVisible(true);
    this.articleSelected.emit(this.gridIndex);
  }
}