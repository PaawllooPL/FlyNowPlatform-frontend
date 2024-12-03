import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizerOffersComponent } from './organizer-offers.component';

describe('OrganizerOffersComponent', () => {
  let component: OrganizerOffersComponent;
  let fixture: ComponentFixture<OrganizerOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganizerOffersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizerOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
