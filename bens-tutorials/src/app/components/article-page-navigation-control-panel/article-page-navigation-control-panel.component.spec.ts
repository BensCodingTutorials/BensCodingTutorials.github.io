import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePageNavigationControlPanelComponent } from './article-page-navigation-control-panel.component';

describe('ArticlePageNavigationControlPanelComponent', () => {
  let component: ArticlePageNavigationControlPanelComponent;
  let fixture: ComponentFixture<ArticlePageNavigationControlPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlePageNavigationControlPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePageNavigationControlPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
