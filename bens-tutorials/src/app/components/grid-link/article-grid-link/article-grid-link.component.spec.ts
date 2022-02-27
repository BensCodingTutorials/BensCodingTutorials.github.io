import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleGridLinkComponent } from './article-grid-link.component';

describe('ArticleGridLinkComponent', () => {
  let component: ArticleGridLinkComponent;
  let fixture: ComponentFixture<ArticleGridLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleGridLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleGridLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
