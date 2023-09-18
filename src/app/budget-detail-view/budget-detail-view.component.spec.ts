import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetDetailViewComponent } from './budget-detail-view.component';

describe('BudgetDetailViewComponent', () => {
  let component: BudgetDetailViewComponent;
  let fixture: ComponentFixture<BudgetDetailViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetDetailViewComponent]
    });
    fixture = TestBed.createComponent(BudgetDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
