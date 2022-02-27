import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicSelectionDropDownComponent } from './topic-selection-drop-down.component';

describe('TopicSelectionDropDownComponent', () => {
  let component: TopicSelectionDropDownComponent;
  let fixture: ComponentFixture<TopicSelectionDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicSelectionDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicSelectionDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
