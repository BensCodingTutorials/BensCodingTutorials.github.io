import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Topic } from 'src/app/dataClasses/topic';
import { BackendService } from 'src/app/services/backend.service';
import { GridLinkComponent } from '../grid-link.component';

@Component({
  selector: 'app-topic-grid-link',
  templateUrl: './topic-grid-link.component.html',
  styleUrls: ['./topic-grid-link.component.css']
})

export class TopicGridLinkComponent extends GridLinkComponent implements OnInit {
  
  @Input() topic = new Topic();
  @Output() topicSelected = new EventEmitter<number>();
  
  constructor(backendService : BackendService, router:Router) { 
    super(backendService, router);
  }

  override ngOnInit(): void {
  }

  override onClick(value:any) {
    this.backendService.setCurrentlySelectedTopic(this.topic);
    this.backendService.setCurrentGridDataMode("series");
    this.backendService.setBackButtonVisible(true);
    this.topicSelected.emit(this.gridIndex);
  }
}
