import { ChangeDetectorRef, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
import { fadeInAnimation } from 'src/app/animations/fade-in';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Article } from 'src/app/dataClasses/article';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class ArticleComponent {
  currentArticle : any;
  activeRouteParamsSubscription : any;
  routerEventsSubscription : any;
  querySubscription : any;
  injectedHTML: any;
  animationState:string = "page_IN"
  
  constructor(private backendService: BackendService, private sanitizer: DomSanitizer, private route: ActivatedRoute, public router : Router, private changeDetection: ChangeDetectorRef) {this.currentArticle = new Article();}

  ngAfterContentInit() {
    if(this.backendService.getData().topicList.length === 0) {
    this.querySubscription = this.backendService.queryData().subscribe(
      (data: any) => {
        this.backendService.setData(data);
        this.getArticleFromURL();
      }
    );

    this.querySubscription.unsubscribe;
    } else {
      this.getArticleFromURL();
    }

    this.changeDetection.detectChanges();
  }

  ngOnDestroy() {
    this.activeRouteParamsSubscription.unsubscribe();
  }

  getArticleFromURL() {      
    this.activeRouteParamsSubscription = this.route.params.subscribe((param) => {
    let topic = this.route.snapshot.params['topic'];
    let series = this.route.snapshot.params['series'];
    let article = this.route.snapshot.params['article'];
    if(!(topic === undefined) && !(series === undefined) && !(article === undefined)) {
      console.log(topic);
      console.log(series);
      console.log(article);

      this.backendService.setCurrentGridDataMode("article");
      this.backendService.setCurrentlySelectedTopic(this.backendService.getTopicByTopicName(topic));
      this.backendService.setCurrentlySelectedSeries(this.backendService.getSeriesByTopicAndSeriesName(topic, series));
      this.backendService.setCurrentlySelectedArticle(this.backendService.getArticleByTopicAndSeriesAndArticleName(topic,series,article));

      console.log(this.backendService.getCurrentlySelectedTopic());

      this.backendService.setBackButtonVisible(true);
      this.currentArticle = this.backendService.getCurrentlySelectedArticle();
      this.injectedHTML = this.sanitizer.bypassSecurityTrustHtml(this.currentArticle.htmlArticle);
    }
   });
   this.activeRouteParamsSubscription.unsubscribe();
  }

  getArticleFromURLParametersArray(paramArray : string[]) {      
    let topic = paramArray[1];
    let series = paramArray[2];
    let article = paramArray[3];
    if(!(topic === undefined) && !(series === undefined) && !(article === undefined)) {
      console.log(topic);
      console.log(series);
      console.log(article);

      this.backendService.setCurrentGridDataMode("article");
      this.backendService.setCurrentlySelectedTopic(this.backendService.getTopicByTopicName(topic));
      this.backendService.setCurrentlySelectedSeries(this.backendService.getSeriesByTopicAndSeriesName(topic, series));
      this.backendService.setCurrentlySelectedArticle(this.backendService.getArticleByTopicAndSeriesAndArticleName(topic,series,article));

      console.log(this.backendService.getCurrentlySelectedTopic());

      this.backendService.setBackButtonVisible(true);
      this.currentArticle = this.backendService.getCurrentlySelectedArticle();
      this.injectedHTML = this.sanitizer.bypassSecurityTrustHtml(this.currentArticle.htmlArticle);
    }

   this.activeRouteParamsSubscription.unsubscribe();
  }

  public changeAnimationState(state:string) {
    this.animationState = state;
  }

  public resetAnimationCSS() {

    let pageElement = document.getElementById(this.animationState);

    if(!(pageElement === null)) {
      console.log("YOP");
      pageElement.style.animationName = "";
      pageElement.id = "";
      setTimeout(this.testFunction.bind(null,pageElement), 1);
      
    }
  }

  private testFunction(pageElement:HTMLElement) {
    pageElement.style.opacity = "0";
    pageElement.style.animationName = "fadeIn";
    pageElement.id = "page_IN";
  }


}