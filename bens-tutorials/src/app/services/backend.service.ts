import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TopicCollection } from '../dataClasses/topicCollection';
import { Article } from '../dataClasses/article';
import { Series } from '../dataClasses/series';
import { Topic } from '../dataClasses/topic';
import { ContentPageIndicatorComponent } from '../components/content-page-indicator/content-page-indicator.component';
import { ArticleGridComponent } from '../components/article-grid/article-grid.component';
import { BackButtonComponent } from '../components/back-button/back-button.component';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  SASkey = "&sv=2020-08-04&ss=bfqt&srt=sco&sp=r&se=9999-01-20T06:22:45Z&st=2022-01-19T22:22:45Z&spr=https&sig=yQkiTESAiXTm9YkX%2FwlyPJLytljoTf5BfbL5%2Feu2%2BKs%3D"; 
  dataURL = "assets/backendData/topicData.json";
  topicTableUrl = "https://benstutorialsdata.table.core.windows.net/topicsTable()?$filter=PartitionKey%20eq%20'root'&sv=2020-08-04&ss=bfqt&srt=sco&sp=r&se=9999-01-20T06:22:45Z&st=2022-01-19T22:22:45Z&spr=https&sig=yQkiTESAiXTm9YkX%2FwlyPJLytljoTf5BfbL5%2Feu2%2BKs%3D";
  seriesTableURL = "https://benstutorialsdata.table.core.windows.net/seriesTable()?$filter=PartitionKey%20eq%20";
  articlesTableUrl = "https://benstutorialsdata.table.core.windows.net/articlesTable()?$filter=PartitionKey%20eq%20";

  private currentlySelectedTopic: Topic;
  private currentlySelectedSeries: Series;
  private currentlySelectedArticle: Article;

  private data : TopicCollection = new TopicCollection();
  private gridDataMode: string = "";
  private backButtonVisible = false;

  private pageIndicator: any;
  private articleGrid: any;
  private backButton: any;

  

  constructor(private http: HttpClient) { 

    this.data = new TopicCollection();
    this.currentlySelectedTopic = new Topic();
    this.currentlySelectedSeries = new Series();
    this.currentlySelectedArticle = new Article();
  }

  public queryData() : Observable<TopicCollection>{
    return this.http.get<TopicCollection>(this.dataURL, {responseType: 'json'});
  }
  
  public getData() {
    return this.data;
  }

  public setData(newData : TopicCollection) {
    this.data = newData;
  }

  public getPreviousURLParameters(url: string) : string[] {
    let snippedURL : string = url.replace("/", "");
    let parameterArray : string[] = snippedURL.split("/");
    let urlParameters : string [] = [];
    let urlParameterLimit = parameterArray.length - 1;
    
    for (let i = 0; i < urlParameterLimit; i++) {
      urlParameters[i] = parameterArray[i];
    }
    
    return urlParameters;
  }

    public getURLParameters(url: string) : string[] {
    let snippedURL : string = url.replace("/", "");
    let parameterArray : string[] = snippedURL.split("/");
    let urlParameters : string [] = [];
    
    for (let i = 0; i < parameterArray.length; i++) {
      urlParameters[i] = parameterArray[i];
    }
    
    return urlParameters;
  }
 

  public getTopics() : Topic[] {
    let topicArray:Topic[] = [];
    for(let i = 0; i < this.data.topicList.length; i++) {
      let currentTopic = this.data.topicList[i];
      topicArray[i] = currentTopic;
    }
    return topicArray;
  }



  public getTopicsByPage(pageIndex : number) {
    let topicArray:Topic[] = [];
    let k = 0;
    for(let i = 16 * pageIndex; i < (16 * (pageIndex + 1)); i++) {
      if(i < this.data.topicList.length) {
        let currentTopic = this.data.topicList[i];
        topicArray[k] = currentTopic;
        k += 1;
      } else {
        i = 16 * (pageIndex + 1);
      }
    }
    console.log(topicArray.length);
    return topicArray;
  }

  public setupTopicsGridPageCount() {
    let pageCount : number = Math.floor(this.data.topicList.length / 16) + 1;
    console.log(typeof(this.pageIndicator));
    this.pageIndicator.pageTotal = pageCount;
    this.pageIndicator.currentPage=0;
  }

  public getSeries() : Series[] {
    let seriesArray:Series[] = [];
    for(let i = 0; i < this.currentlySelectedTopic.seriesList.length; i++) {
      let currentSeries = this.currentlySelectedTopic.seriesList[i];
      seriesArray[i] = currentSeries;
    }

    return seriesArray;
  }

  public getSeriesByPage(pageIndex : number) {
    let seriesArray:Series[] = [];
    let k = 0;
    for(let i = 16 * pageIndex; i < (16 * (pageIndex + 1)); i++) {
      if(i < this.currentlySelectedTopic.seriesList.length) {
        let currentSeries = this.currentlySelectedTopic.seriesList[i];
        seriesArray[k] = currentSeries;
        k += 1;
      } else {
        i = 16 * (pageIndex + 1);
      }
    }
    console.log(seriesArray.length);
    return seriesArray;
  }

  public setupSeriesGridPageCount() {
    console.log(this.currentlySelectedTopic.seriesList.length);
    let pageCount = Math.floor(this.currentlySelectedTopic.seriesList.length / 16) + 1;
    this.pageIndicator.pageTotal = pageCount;
    this.pageIndicator.currentPage = 0;
  }

  public getArticles() : Article[] {
    let articleArray : Article[] = [];
    for(let i = 0; i < this.currentlySelectedSeries.articleList.length; i++) {
      let currentArticle = this.currentlySelectedSeries.articleList[i];
      articleArray[i] = currentArticle;
    }

    return articleArray;
  }

  public setupArticlesGridPageCount() {
    let pageCount = Math.floor(this.currentlySelectedSeries.articleList.length / 16) + 1;
    this.pageIndicator.pageTotal = pageCount;
    this.pageIndicator.currentPage = 0;
  }

  public getTopicByTopicName(topicName: string) : Topic {
    let topic = new Topic();
    for(let i = 0; i < this.data.topicList.length; i++) {
      if(this.data.topicList[i].topic === topicName) {
        topic = this.data.topicList[i];
        i = this.data.topicList.length;
      }
    }

    return topic;
  }

  public getSeriesByTopicName(topicName : string) : Series[] {
    let topic = this.getTopicByTopicName(topicName);
    return topic.seriesList;
  }

  public getArticlesByPage(pageIndex : number) {
    let articleArray:Article[] = [];
    let k = 0;
    for(let i = 16 * pageIndex; i < (16 * (pageIndex + 1)); i++) {
      if(i < this.currentlySelectedSeries.articleList.length) {
        let currentArticle = this.currentlySelectedSeries.articleList[i];
        articleArray[k] = currentArticle;
        k += 1;
      } else {
        i = 16 * (pageIndex + 1);
      }
    }
    console.log(articleArray.length);
    return articleArray;
  }

  public getSeriesByTopicAndSeriesName(topicName : string, seriesName: string) : Series {
    let series = new Series();
    let topic = this.getTopicByTopicName(topicName);
    for(let i = 0; i < topic.seriesList.length; i++) {
      if(topic.seriesList[i].series === seriesName) {
        series = topic.seriesList[i];
        i = topic.seriesList.length;
      }
    }
    return series;
  }

  public getArticlesByTopicAndSeriesName(topicName : string, seriesName: string) : Article[] {
    let series = this.getSeriesByTopicAndSeriesName(topicName, seriesName);
    return series.articleList;
  }

  public getArticleByTopicAndSeriesAndArticleName(topicName : string, seriesName: string, articleName: string) : Article {
    let article = new Article();
    let articles = this.getArticlesByTopicAndSeriesName(topicName, seriesName);
    for(let i = 0; i < articles.length; i++) {
      if(articles[i].article === articleName) {
        article = articles[i];
        i = articles.length;
      }
    }

    return article;
  }

  public getCurrentGridDataMode() {
    return this.gridDataMode;
  }

  public setCurrentGridDataMode(newGridDataMode: string) {
    this.gridDataMode = newGridDataMode;
  }
  
  public getCurrentlySelectedTopic() {
    return this.currentlySelectedTopic;
  }

  public setCurrentlySelectedTopic(selectedTopicValue : Topic) {
    this.currentlySelectedTopic = selectedTopicValue;
  }

  public getCurrentlySelectedSeries() {
    return this.currentlySelectedSeries;
  }

  public setCurrentlySelectedSeries(selectedSeriesValue : Series) {
    this.currentlySelectedSeries = selectedSeriesValue;
  }

  public getCurrentlySelectedArticle() {
    return this.currentlySelectedArticle;
  }

  public setCurrentlySelectedArticle(selectedArticleValue: Article) {
    this.currentlySelectedArticle = selectedArticleValue;
  }

  public getBackButtonVisible() : boolean {
    return this.backButtonVisible;
  }

  public setBackButtonVisible(backButtonVisibleState: boolean) {
    this.backButtonVisible = backButtonVisibleState;
  }

  public injectContentPageIndicatorComponent(contentPageIndicatorComponent : ContentPageIndicatorComponent) {
    this.pageIndicator = contentPageIndicatorComponent;
  }

  public injectArticleGridComponent(articleGridComponent : ArticleGridComponent) {
    this.articleGrid = articleGridComponent;
  }

  public injectBackButtonGridComponent(backButtonComponent : BackButtonComponent) {
    this.backButton = backButtonComponent;
  }

  public injectArticleGridComponent_To_Components() {
    this.pageIndicator.injectDependencies(this.articleGrid);
    this.backButton.injectDependencies(this.articleGrid);
  }

  public getContentPageIndicator() : ContentPageIndicatorComponent {
    return this.pageIndicator;
  }
}
