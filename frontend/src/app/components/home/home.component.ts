import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../../services/account/account.service';
import { Account } from '../../models/account';
import { Transaction } from "../../models/transaction";
import { TransactionService } from "../../services/transaction/transaction.service";
import { UpdateService } from '../../services/update/update.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  accountId: number = -1;
  accounts: Account[] = [];
  transactions: Transaction[] = [];
  filteredTransactions: Transaction[] = [];

  constructor(
    private accountService: AccountService,
    private updateService: UpdateService,
    private transactionService: TransactionService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.accountId = +params['id'];
      if (isNaN(this.accountId)) {this.accountId = -1;}
      this.updateService.setAccountId(this.accountId);
      this.loadContent();
    })
  }

  loadContent(){
    this.accountService.getAll().subscribe(
      (data => this.accounts = data))
    this.transactionService.getAll().subscribe(
      (data => {this.transactions = data.filter(transaction => this.accountId == -1 || transaction.account.id == this.accountId ),
      this.filterTransactions(data)}))
  }

  calculateTotalExpenditure(): number{
    let totalExpenditure = 0;
    for (let transaction of this.filteredTransactions) {
      if (transaction.amount < 0) {
        totalExpenditure += transaction.amount;
      }
    }
    return Math.abs(totalExpenditure)
  }

  calculateTotalIncome(): number{
    let totalIncome = 0;
    for (let transaction of this.filteredTransactions) {
      if (transaction.amount > 0) {
        totalIncome += transaction.amount;
      }
    }
    return totalIncome;
  }

  filterTransactions(data: Transaction[]): void {
    this.filteredTransactions = [];
    if(this.accountId == -1){
      this.filteredTransactions = data;
    }
    else {
      for (let transaction of data){
        if (transaction.account.id == this.accountId){
          this.filteredTransactions.push(transaction);
        }
      }
    }
    this.sortBy('date');
  }

  calculateBalance(): number {
    let balance = 0;
    if (this.accountId === -1){
      for(let account of this.accounts){
        balance += account.balance;
      }
    } else {
      balance = (this.getAccountById(this.accountId)?.balance) ?? 0;
    }
    return balance;
  }

  getAccountById(id: number): Account | null {
    for(let account of this.accounts){
      if (id == account.id){
        return account;
      }
    }
    return null;
  }

  sorted = { isSorted: false, attribute: "" };
  sortBy(attribute: string): void {
    switch (attribute) {
      case 'date':
        if (this.sorted.isSorted && this.sorted.attribute === 'date'){
          this.filteredTransactions.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        } else {
          this.filteredTransactions.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
        }
        this.sorted.isSorted = !this.sorted.isSorted;
        this.sorted.attribute = 'date';
        break;

      case 'amount':
        if (this.sorted.isSorted && this.sorted.attribute === 'amount'){
          this.filteredTransactions.sort((a, b) => a.amount - b.amount);
        } else {
          this.filteredTransactions.sort((a, b) => b.amount - a.amount);
        }
        this.sorted.isSorted = !this.sorted.isSorted;
        this.sorted.attribute = 'amount';
        break;

      case 'description':
        if (this.sorted.isSorted && this.sorted.attribute === 'description'){
          this.filteredTransactions.sort((a, b) => b.description.localeCompare(a.description));
        } else {
          this.filteredTransactions.sort((a, b) => a.description.localeCompare(b.description));
        }
        this.sorted.isSorted = !this.sorted.isSorted;
        this.sorted.attribute = 'description';
        break;

      case 'recurring':
        if (this.sorted.isSorted && this.sorted.attribute === 'recurring'){
          this.filteredTransactions.sort((a, b) => a.recurring === b.recurring ? 0 : a.recurring ? -1 : 1);
        } else {
          this.filteredTransactions.sort((a, b) => a.recurring === b.recurring ? 0 : a.recurring ? 1 : -1);
        }
        this.sorted.isSorted = !this.sorted.isSorted;
        this.sorted.attribute = 'recurring';
        break;

      case 'category':
        if (this.sorted.isSorted && this.sorted.attribute === 'category'){
          this.filteredTransactions.sort((a, b) => b.category.name.localeCompare(a.category.name));
        } else {
          this.filteredTransactions.sort((a, b) => a.category.name.localeCompare(b.category.name));
        }
        this.sorted.isSorted = !this.sorted.isSorted;
        this.sorted.attribute = 'category';
        break;

      case 'account':
        if (this.sorted.isSorted && this.sorted.attribute === 'account'){
          this.filteredTransactions.sort((a, b) => b.account.name.localeCompare(a.account.name));
        } else {
          this.filteredTransactions.sort((a, b) => a.account.name.localeCompare(b.account.name));
        }
        this.sorted.isSorted = !this.sorted.isSorted;
        this.sorted.attribute = 'account';
        break;

      default:
        break;
    }
  }
}

