import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsCategoriesComponent } from './posts-categories.component';

describe('PostsCategoriesComponent', () => {
  let component: PostsCategoriesComponent;
  let fixture: ComponentFixture<PostsCategoriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostsCategoriesComponent]
    });
    fixture = TestBed.createComponent(PostsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
