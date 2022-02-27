import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridLinkComponent } from './grid-link.component';

describe('GridLinkComponent', () => {
  let component: GridLinkComponent;
  let fixture: ComponentFixture<GridLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
