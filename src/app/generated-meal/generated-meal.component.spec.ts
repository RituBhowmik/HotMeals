import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedMealComponent } from './generated-meal.component';

describe('GeneratedMealComponent', () => {
  let component: GeneratedMealComponent;
  let fixture: ComponentFixture<GeneratedMealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneratedMealComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneratedMealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
