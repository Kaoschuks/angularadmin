import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersAccessnavComponent } from './users-accessnav.component';

describe('UsersAccessnavComponent', () => {
  let component: UsersAccessnavComponent;
  let fixture: ComponentFixture<UsersAccessnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersAccessnavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UsersAccessnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
