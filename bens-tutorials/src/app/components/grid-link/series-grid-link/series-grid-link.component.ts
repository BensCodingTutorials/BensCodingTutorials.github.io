import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Series } from 'src/app/dataClasses/series';
import { BackendService } from 'src/app/services/backend.service';
import { GridLinkComponent } from '../grid-link.component';

@Component({
  selector: 'app-series-grid-link',
  templateUrl: './series-grid-link.component.html',
  styleUrls: ['./series-grid-link.component.css']
})

export class SeriesGridLinkComponent extends GridLinkComponent implements OnInit {
  @Input() series = new Series();
  @Output() seriesSelected = new EventEmitter<number>();

  constructor(backendService : BackendService, router:Router) { 
    super(backendService, router);
  }

  override ngOnInit(): void {
  }

  override onClick(value:any) {
    
    this.backendService.setCurrentlySelectedSeries(this.series);
    this.backendService.setCurrentGridDataMode("article");
    this.backendService.setBackButtonVisible(true);
    this.seriesSelected.emit(this.gridIndex);
  }
}