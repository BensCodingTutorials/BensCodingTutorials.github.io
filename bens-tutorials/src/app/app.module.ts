import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
import { ArticleGridComponent } from './components/article-grid/article-grid.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ArticleGridLinkComponent } from './components/grid-link/article-grid-link/article-grid-link.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ArticleComponent } from './pages/article/article.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationLinkComponent } from './components/navigation-link/navigation-link.component';
import { SocialLinkComponent } from './components/social-link/social-link.component';
import { FormsModule } from '@angular/forms';
import { TopicSelectionDropDownComponent } from './components/topic-selection-drop-down/topic-selection-drop-down.component';
import { SortByDropDownComponent } from './components/sort-by-drop-down/sort-by-drop-down.component';
import { SeriesGridLinkComponent } from './components/grid-link/series-grid-link/series-grid-link.component';
import { CommonModule } from '@angular/common';
import { TopicGridLinkComponent } from './components/grid-link/topic-grid-link/topic-grid-link.component';
import { EmptyGridLinkComponent } from './components/grid-link/empty-grid-link/empty-grid-link.component';
import { BackButtonComponent } from './components/back-button/back-button.component';
import { GridLinkComponent } from './components/grid-link/grid-link.component';
import { ContentPageIndicatorComponent } from './components/content-page-indicator/content-page-indicator.component';
import { ArticlePageBackButtonComponent } from './components/article-page-back-button/article-page-back-button.component';
import { SocialMediaShareLinksContainerComponent } from './components/social-media-share-links-container/social-media-share-links-container.component';
import { ArticlePageNavigationControlPanelComponent } from './components/article-page-navigation-control-panel/article-page-navigation-control-panel.component';  

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ImageSliderComponent,
    ArticleGridComponent,
    SearchBarComponent,
    SwitchComponent,
    ArticleGridLinkComponent,
    AboutMeComponent,
    ArticleComponent,
    NavigationLinkComponent,
    SocialLinkComponent,
    TopicSelectionDropDownComponent,
    SortByDropDownComponent,
    SeriesGridLinkComponent,
    TopicGridLinkComponent,
    EmptyGridLinkComponent,
    BackButtonComponent,
    GridLinkComponent,
    ContentPageIndicatorComponent,
    ArticlePageBackButtonComponent,
    SocialMediaShareLinksContainerComponent,
    ArticlePageNavigationControlPanelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
