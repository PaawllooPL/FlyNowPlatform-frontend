import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListButtonContainerComponent } from './list-button-container.component';

describe('ListButtonContainerComponent', () => {
  let component: ListButtonContainerComponent;
  let fixture: ComponentFixture<ListButtonContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListButtonContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListButtonContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
