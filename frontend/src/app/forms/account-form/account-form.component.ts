import { Component } from '@angular/core';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account/account.service';
import { UpdateService } from '../../services/update/update.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrl: './account-form.component.scss'
})
export class AccountFormComponent {
  accountId: number = -1;
  account?: Account;
  accountForm: FormGroup;

  constructor(
    private accountService: AccountService,
    private updateService: UpdateService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.accountForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(1)]],
      balance: [null, [Validators.required]],
    })
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.accountId = +params['id'];
      if (isNaN(this.accountId)) { this.accountId = -1; }
      this.updateService.setAccountId(this.accountId);
      if( this.accountId != -1 ){
        this.loadAccount(this.accountId);
      }
    })
  }

  loadAccount(id: number){
    this.accountService.getAccountById(id).subscribe(
      (data => this.account = data))
  }

  saveAccount() {
    let account: Account;
    if (this.accountId == -1) {
      account = {
        name: this.accountForm.value.name,
        balance: this.accountForm.value.balance,
        transactions: []
      };
      this.accountService.createAccount(account)
        .subscribe(() => {
          this.router.navigate([`/overview/${this.accountId}`]),
          this.updateService.setAccountChanges();
        });
    } else {
      account = {
        id: this.account?.id || 0,
        name: this.accountForm.value.name,
        balance: this.accountForm.value.balance,
        transactions: this.account?.transactions || []
      };
      this.accountService.updateAccount(account)
        .subscribe(() => {
          this.router.navigate([`/overview/${this.accountId}`]),
          this.updateService.setAccountChanges();
        });
      }
  }

  deleteAccount(){
    this.accountService.deleteAccount(this.accountId)
        .subscribe(() => {
          this.router.navigate([`/overview/-1`]),
          this.updateService.setAccountChanges();
        });

}
}
