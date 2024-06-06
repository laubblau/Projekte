import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtFormComponent } from './debt-form.component';

describe('DebtFormComponent', () => {
  let component: DebtFormComponent;
  let fixture: ComponentFixture<DebtFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebtFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebtFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
