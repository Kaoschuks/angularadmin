import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRightComponent } from './modal-right.component';

describe('ModalRightComponent', () => {
  let component: ModalRightComponent;
  let fixture: ComponentFixture<ModalRightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalRightComponent]
    });
    fixture = TestBed.createComponent(ModalRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
