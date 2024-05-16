import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMediumComponent } from './modal-medium.component';

describe('ModalMediumComponent', () => {
  let component: ModalMediumComponent;
  let fixture: ComponentFixture<ModalMediumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalMediumComponent]
    });
    fixture = TestBed.createComponent(ModalMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
