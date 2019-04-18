import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankBranchesComponent } from './bank-branches.component';

describe('BankBranchesComponent', () => {
  let component: BankBranchesComponent;
  let fixture: ComponentFixture<BankBranchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankBranchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankBranchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
