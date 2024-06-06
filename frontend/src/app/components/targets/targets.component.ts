import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdateService } from '../../services/update/update.service';
import { TargetService } from '../../services/target/target.service';
import { DebtService } from '../../services/debt/debt.service';
import { Target } from '../../models/target';
import { Debt } from '../../models/debt';

@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrl: './targets.component.scss'
})
export class TargetsComponent {
  accountId: number = -1;
  targets: Target[] = [];
  debts: Debt[] = [];

  constructor(
    private targetService: TargetService,
    private debtService: DebtService,
    private updateService: UpdateService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadTarget();
    this.loadDebt();
    this.route.params.subscribe(params => {
      this.accountId = +params['id'];
      if (isNaN(this.accountId)) { this.accountId = -1; }
      this.updateService.setAccountId(this.accountId);
    })
  }

  loadDebt(){
    this.debtService.getAll().subscribe(
      data => this.debts = data)
  }

  postDebt(debt: Debt){
    this.debtService.createDebt(debt).subscribe(
    () => this.loadDebt())
  }

  putDebt(debt: Debt){
    this.debtService.updateDebt(debt).subscribe(
    () => this.loadDebt())
  }

  deleteDebt(id: number){
    this.debtService.deleteDebt(id).subscribe(
    () => this.loadDebt())
  }

  loadTarget(){
    this.targetService.getAll().subscribe(
      data => this.targets = data)
  }

  postTarget(target: Target) {
    this.targetService.createTarget(target).subscribe(
      data => this.loadTarget())
  }

  putTarget(target: Target) {
    this.targetService.updateTarget(target).subscribe(
      data => this.loadTarget())
  }

  deleteTarget(id: number) {
    this.targetService.deleteTarget(id).subscribe(
      data => this.loadTarget())
  }
}
