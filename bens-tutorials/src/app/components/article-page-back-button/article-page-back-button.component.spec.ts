import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePageBackButtonComponent } from './article-page-back-button.component';

describe('ArticlePageBackButtonComponent', () => {
  let component: ArticlePageBackButtonComponent;
  let fixture: ComponentFixture<ArticlePageBackButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlePageBackButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePageBackButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
