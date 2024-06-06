import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Debt } from '../../models/debt';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-debt-form',
  templateUrl: './debt-form.component.html',
  styleUrl: './debt-form.component.scss'
})
export class DebtFormComponent {
  @Input() debtList?: Debt[];
  @Output() generateDebt: EventEmitter<Debt> = new EventEmitter<Debt>();
  @Output() updateDebt: EventEmitter<Debt> = new EventEmitter<Debt>();
  @Output() deleteDebt: EventEmitter<number> = new EventEmitter<number>();
  debtsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.debtsForm = this.fb.group({
      id: [null],
      total_debts: [null, Validators.required],
      already_paid: [null, Validators.required],
      beneficiary: [null, Validators.required],
      deadline: [null, Validators.required]
    });
  }

  saveDebt() {
    let debt: Debt;
    debt = {
      id: this.debtsForm.value.id || null,
      total_debts: this.debtsForm.value.total_debts,
      already_paid: this.debtsForm.value.already_paid,
      beneficiary: this.debtsForm.value.beneficiary,
      deadline: this.debtsForm.value.deadline,
    }
    if(debt.id == null){
      this.generateDebt.emit(debt);
    } else {
      this.updateDebt.emit(debt);
    }
    this.debtsForm.reset();
  }

  editDebts(debt: Debt) {
    this.debtsForm.patchValue(debt);
  }

  removeDebt(id?: number) {
    this.deleteDebt.emit(id);
  }

  templates: any;
  optionChoice: any;

  onChange() {
    this.optionChoice = this.templates.nativeElement.value;
  }
}
