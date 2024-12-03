import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerOfferDetailsComponent } from './organizer-offer-details.component';

describe('OrganizerOfferDetailsComponent', () => {
  let component: OrganizerOfferDetailsComponent;
  let fixture: ComponentFixture<OrganizerOfferDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizerOfferDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizerOfferDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
