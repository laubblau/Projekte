import { Component } from '@angular/core';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account/account.service';
import { Router } from '@angular/router';
import { UpdateService } from '../../services/update/update.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  accounts: Account[] = [];
  balance: number = 0;
  accountId: number = -1;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private updateService: UpdateService
  ){}

  ngOnInit(): void {
    this.loadAccounts();
    this.updateService.getAccountId().subscribe(id => {
      this.accountId = id;
      this.calculateBalance(id);
    });
    this.updateService.getAccountChanges().subscribe(() => {
      this.loadAccounts();
    });
  }

  selectAccount(selected: Account | null): void {
    let newId: number;
    if (selected === null) {
      newId = -1;
    } else if (selected.id !== undefined) {
      newId = selected.id;
    } else {
      newId = -1;
    }
    this.calculateBalance(newId);
    let activeRoute: string = this.router.url.split('/')[1];
    this.router.navigate(["/", activeRoute, newId]);
  }

  loadAccounts(){
    this.accountService.getAll().subscribe(
      (data => {
        this.accounts = data || [];
        this.calculateBalance(this.accountId);
      })
    );
  }

  calculateBalance(id: number) {
    if (id === -1){
      this.balance = 0;
      for(let account of this.accounts){
        this.balance += account.balance;
      }
    } else {
      this.balance = (this.getAccountById(id)?.balance) ?? 0;
    }
  }

  getAccountById(id: number): Account | null {
    for(let account of this.accounts){
      if (id == account.id){
        return account;
      }
    }
    return null;
  }
}
