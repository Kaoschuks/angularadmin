import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsNavbarComponent } from './settings-navbar.component';

describe('SettingsNavbarComponent', () => {
  let component: SettingsNavbarComponent;
  let fixture: ComponentFixture<SettingsNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingsNavbarComponent]
    });
    fixture = TestBed.createComponent(SettingsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
