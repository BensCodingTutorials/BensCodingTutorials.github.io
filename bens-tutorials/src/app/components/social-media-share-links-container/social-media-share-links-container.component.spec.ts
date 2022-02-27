import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaShareLinksContainerComponent } from './social-media-share-links-container.component';

describe('SocialMediaShareLinksContainerComponent', () => {
  let component: SocialMediaShareLinksContainerComponent;
  let fixture: ComponentFixture<SocialMediaShareLinksContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaShareLinksContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaShareLinksContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
