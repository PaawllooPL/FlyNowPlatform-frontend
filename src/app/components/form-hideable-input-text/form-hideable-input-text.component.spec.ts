import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHideableInputTextComponent } from './form-hideable-input-text.component';

describe('FormHideableInputTextComponent', () => {
  let component: FormHideableInputTextComponent;
  let fixture: ComponentFixture<FormHideableInputTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormHideableInputTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHideableInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
