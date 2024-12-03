import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerOfferTabComponent } from './organizer-offer-tab.component';

describe('OrganizerOfferTabComponent', () => {
  let component: OrganizerOfferTabComponent;
  let fixture: ComponentFixture<OrganizerOfferTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizerOfferTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizerOfferTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
