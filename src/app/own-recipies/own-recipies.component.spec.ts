import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnRecipiesComponent } from './own-recipies.component';

describe('OwnRecipiesComponent', () => {
  let component: OwnRecipiesComponent;
  let fixture: ComponentFixture<OwnRecipiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnRecipiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnRecipiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
