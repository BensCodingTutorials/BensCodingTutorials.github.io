import { AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-article-grid',
  templateUrl: './article-grid.component.html',
  styleUrls: ['./article-grid.component.css'],
})

export class ArticleGridComponent implements AfterViewInit {
  activeRouteParamsSubscription : any;
  routerEventsSubscription : any;
  querySubscription : any;
  currentlyDisplayedData: any[] = []
  currentGridMode:any;

  constructor(public backendService: BackendService, public router : Router, private route: ActivatedRoute, private changeDetection: ChangeDetectorRef) {}

  ngOnInit() {
    this.backendService.injectArticleGridComponent(this);
  }

  ngOnDestroy() {
    this.activeRouteParamsSubscription.unsubscribe();
    this.routerEventsSubscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.backendService.injectArticleGridComponent_To_Components();

    this.routerEventsSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
          if (event.navigationTrigger === 'popstate') {
            this.performURLQuery();
          }
      }
      
      if (event instanceof NavigationEnd) {
        this.performURLQuery();
    }    
    });

    this.GetData();
    this.changeDetection.detectChanges();
  }

  OnTopicSelected(value:any) {
    this.backendService.setCurrentlySelectedTopic(this.currentlyDisplayedData[value]);
    this.GetSeriesData();
  }

  OnSeriesSelected(value:any) {
    this.backendService.setCurrentlySelectedSeries(this.currentlyDisplayedData[value]);
    this.GetArticleData();
  }

  OnArticleSelected(value:any) {
    this.backendService.setCurrentlySelectedArticle(this.currentlyDisplayedData[value]);
  }

  GetData() {
    console.log("AGH");
    this.currentlyDisplayedData = [];
   
    if(this.backendService.getData().topicList.length === 0) {
      console.log("INITIALIZE DATA");
      this.querySubscription = this.backendService.queryData().subscribe(
        (data: any) => {
          this.backendService.setData(data);
          this.performURLQuery();
        }
      );

      this.querySubscription.unsubscribe;
    } else {
      this.performURLQuery();
    }
    
  } 

  GetTopicData() {
    this.currentlyDisplayedData = this.backendService.getTopics();
  } 

  GetSeriesData() {
    this.currentlyDisplayedData = this.backendService.getSeries();
  } 

  GetArticleData() {
    this.currentlyDisplayedData = this.backendService.getArticles();
  } 

  performURLQuery() {      
    this.activeRouteParamsSubscription = this.route.children[0].params.subscribe((param) => {
      
      let topic = this.route.children[0].snapshot.params['topic'];
      let series = this.route.children[0].snapshot.params['series'];
      let article = this.route.children[0].snapshot.params['article'];
      if(topic === undefined) {
        this.currentGridMode = "topic";
        this.backendService.setCurrentGridDataMode("topic");
        this.backendService.setupTopicsGridPageCount();  
        this.changeGridTopicsByPage(0);
        this.backendService.setBackButtonVisible(false);
      } else if(!(topic === undefined) && series === undefined) {
        this.currentGridMode = "series";
        this.backendService.setCurrentGridDataMode("series");
        this.backendService.setCurrentlySelectedTopic(this.backendService.getTopicByTopicName(topic));
        this.backendService.setupSeriesGridPageCount();  
        this.changeGridSeriesByPage(0);
        this.backendService.setBackButtonVisible(true);
      } else if(!(topic === undefined) && !(series === undefined) && article === undefined) {
        this.currentGridMode = "article";
        this.backendService.setCurrentGridDataMode("article");
        this.backendService.setCurrentlySelectedTopic(this.backendService.getTopicByTopicName(topic));
        this.backendService.setCurrentlySelectedSeries(this.backendService.getSeriesByTopicAndSeriesName(topic, series));
        this.backendService.setupArticlesGridPageCount();  
        this.changeGridArticlesByPage(0);
        this.backendService.setBackButtonVisible(true);
      }
    });
 
    this.activeRouteParamsSubscription.unsubscribe()
  }

  public changeGridTopicsByPage(pageIndex : number) {
    this.currentlyDisplayedData = [];
    this.currentlyDisplayedData = this.backendService.getTopicsByPage(pageIndex);
  }

  public changeGridSeriesByPage(pageIndex : number) {
    this.currentlyDisplayedData = [];
    this.currentlyDisplayedData = this.backendService.getSeriesByPage(pageIndex);
  }

  public changeGridArticlesByPage(pageIndex : number) {
    this.currentlyDisplayedData = [];
    this.currentlyDisplayedData = this.backendService.getArticlesByPage(pageIndex);
  }

  public clearCurrentlyDisplayedDataArray() {
    this.currentlyDisplayedData = [];
  }
}