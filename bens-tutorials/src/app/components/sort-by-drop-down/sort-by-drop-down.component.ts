import { Component, Input, Output, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';

@Component({
  selector: 'app-sort-by-drop-down',
  templateUrl: './sort-by-drop-down.component.html',
  styleUrls: ['./sort-by-drop-down.component.css']
})
export class SortByDropDownComponent implements OnInit {

  label: string = "Sort By";
  content: string[] = ["Date Published", "Popularity", "Alphabetical"];
  @Input() selectorValue: string = "Date Published";
  @Output() selectorValueChange = new EventEmitter<string>();
  @ViewChild('sortByDropDownElement') sortByDropDownElement:any;

  constructor(private service: BackendService) { 
    
  }

  ngOnInit(): void {

  } 
}
