import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardtableComponent } from './onboardtable.component';

describe('OnboardtableComponent', () => {
  let component: OnboardtableComponent;
  let fixture: ComponentFixture<OnboardtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnboardtableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnboardtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
