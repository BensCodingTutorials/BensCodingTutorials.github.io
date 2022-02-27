import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPageIndicatorComponent } from './content-page-indicator.component';

describe('ContentPageIndicatorComponent', () => {
  let component: ContentPageIndicatorComponent;
  let fixture: ComponentFixture<ContentPageIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPageIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPageIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
