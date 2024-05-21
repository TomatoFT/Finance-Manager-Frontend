import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetUpdateComponent } from './budget-update.component';

describe('BudgetUpdateComponent', () => {
  let component: BudgetUpdateComponent;
  let fixture: ComponentFixture<BudgetUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetUpdateComponent]
    });
    fixture = TestBed.createComponent(BudgetUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
