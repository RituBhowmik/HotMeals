import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenratedMealsComponent } from './genrated-meals.component';

describe('GenratedMealsComponent', () => {
  let component: GenratedMealsComponent;
  let fixture: ComponentFixture<GenratedMealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenratedMealsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenratedMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
