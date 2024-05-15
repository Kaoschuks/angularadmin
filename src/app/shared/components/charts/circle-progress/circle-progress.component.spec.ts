import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CircleProgressComponent } from './circle-progress.component';
import { CircleProgressModule } from './circle-progress.module';

describe('CircleProgressComponent', () => {
  let component: CircleProgressComponent;
  let fixture: ComponentFixture<CircleProgressComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ CircleProgressComponent, CircleProgressModule ],
    }).compileComponents();

    fixture = TestBed.createComponent(CircleProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
