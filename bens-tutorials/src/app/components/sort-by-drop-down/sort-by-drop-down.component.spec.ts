import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortByDropDownComponent } from './sort-by-drop-down.component';

describe('SortByDropDownComponent', () => {
  let component: SortByDropDownComponent;
  let fixture: ComponentFixture<SortByDropDownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortByDropDownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortByDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
