import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicGridLinkComponent } from './topic-grid-link.component';

describe('TopicGridLinkComponent', () => {
  let component: TopicGridLinkComponent;
  let fixture: ComponentFixture<TopicGridLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicGridLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicGridLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
