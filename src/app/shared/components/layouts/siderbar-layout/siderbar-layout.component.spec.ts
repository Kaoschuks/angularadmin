import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiderbarLayoutComponent } from './siderbar-layout.component';

describe('SiderbarLayoutComponent', () => {
  let component: SiderbarLayoutComponent;
  let fixture: ComponentFixture<SiderbarLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiderbarLayoutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SiderbarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
