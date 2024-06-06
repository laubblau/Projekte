import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetsComponent } from './targets.component';

describe('TargetsComponent', () => {
  let component: TargetsComponent;
  let fixture: ComponentFixture<TargetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TargetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
