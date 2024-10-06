import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSubmitButtonComponent } from './list-submit-button.component';

describe('ListSubmitButtonComponent', () => {
  let component: ListSubmitButtonComponent;
  let fixture: ComponentFixture<ListSubmitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSubmitButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListSubmitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
