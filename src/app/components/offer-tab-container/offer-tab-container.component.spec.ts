import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferTabContainerComponent } from './offer-tab-container.component';

describe('OfferTabContainerComponent', () => {
  let component: OfferTabContainerComponent;
  let fixture: ComponentFixture<OfferTabContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferTabContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferTabContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
