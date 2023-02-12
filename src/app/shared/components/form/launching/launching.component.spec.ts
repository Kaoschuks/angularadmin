import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchingComponent } from './launching.component';

describe('LaunchingComponent', () => {
  let component: LaunchingComponent;
  let fixture: ComponentFixture<LaunchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
