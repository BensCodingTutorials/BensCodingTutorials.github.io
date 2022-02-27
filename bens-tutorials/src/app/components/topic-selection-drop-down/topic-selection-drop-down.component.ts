import { Component, Input, Output, OnInit, EventEmitter, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BackendService } from 'src/app/services/backend.service';
@Component({
  selector: 'app-topic-selection-drop-down',
  templateUrl: './topic-selection-drop-down.component.html',
  styleUrls: ['./topic-selection-drop-down.component.css']
})
export class TopicSelectionDropDownComponent implements OnInit {
  queryMode: string = "series";
  topicsArray: string[] = [];
  label: string = "Topic";
  content: any[] = [];
  selectorValue: string = "";
  backendService: BackendService;
  @Output() public selectorValueChange = new EventEmitter<string>();
  constructor(private http: HttpClient, private service: BackendService) { 
    console.log("CONSTRUCOTR");
    this.backendService = service;
  }

  ngOnInit(): void {
    console.log("INIT");
    this.GetTopicData();
    
  } 

  public onValueChanged(value: any) {
    this.backendService.setCurrentlySelectedTopic(value);
    console.log(this.backendService.getCurrentlySelectedTopic());
    this.selectorValueChange.emit();
  }

  GetTopicData() {
    // if(this.queryMode === "series") {
    //   this.service.getTopics().subscribe(
    //     (data: any) => {
    //       this.topicsArray=data.value;
    //       this.content = this.topicsArray;
    //       this.selectorValue = this.content[0].RowKey;
    //       this.onValueChanged(this.selectorValue);          
    //     }
    //   );
    // } else if (this.queryMode === "articles") {
    //   this.service.getArticles(this.selectorValue).subscribe(
    //     (data: any) => {
    //       this.topicsArray=data.value;
    //       this.content = this.topicsArray;
    //     }
    //   );
    // }
  } 



  
}