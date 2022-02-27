import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesGridLinkComponent } from './series-grid-link.component';

describe('SeriesGridLinkComponent', () => {
  let component: SeriesGridLinkComponent;
  let fixture: ComponentFixture<SeriesGridLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriesGridLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesGridLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
