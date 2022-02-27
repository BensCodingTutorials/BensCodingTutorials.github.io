import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyGridLinkComponent } from './empty-grid-link.component';

describe('EmptyGridLinkComponent', () => {
  let component: EmptyGridLinkComponent;
  let fixture: ComponentFixture<EmptyGridLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyGridLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyGridLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
