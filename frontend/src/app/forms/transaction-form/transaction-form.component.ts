import { Component } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '../../services/transaction/transaction.service';
import { UpdateService } from '../../services/update/update.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../../models/category';
import { AccountService } from '../../services/account/account.service';
import { CategoryService } from '../../services/category/category.service';
import { Account } from '../../models/account';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrl: './transaction-form.component.scss'
})
export class TransactionFormComponent {
  accountId: number = -1;
  transactionId: number = -1;
  transaction?: Transaction;
  accounts: Account[] = [];
  categories: Category[] = [];
  transactionForm: FormGroup;

  constructor(
    private accountService: AccountService,
    private transactionService: TransactionService,
    private categoryService: CategoryService,
    private updateService: UpdateService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.transactionForm = this.fb.group({
      id: [null],
      date: [null, Validators.required],
      amount: [null, Validators.required],
      description: [null, Validators.required],
      recurring: [false, Validators.required],
      category: [null, Validators.required],
      account: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadContent()
    this.route.params.subscribe(params => {
      this.accountId = +params['id'];
      if (isNaN(this.accountId)) { this.accountId = -1; }
      this.updateService.setAccountId(this.accountId);
    })
    this.transactionId = this.updateService.getEditId();
    if(this.transactionId != -1){
      this.loadTransaction(this.transactionId);
    }
  }

  loadContent(){
    this.accountService.getAll().subscribe(
      (data => this.accounts = data));
    this.categoryService.getAll().subscribe(
      (data => this.categories = data ));
  }

  loadTransaction(id: number){
    this.transactionService.getTransactionById(id).subscribe((data => {
      this.transaction = data

      const transactionDate = new Date(this.transaction.date)
      const date = transactionDate.toISOString().split('T')[0]

      this.transactionForm.controls['id'].setValue(this.transaction.id)
      this.transactionForm.controls['date'].setValue(date)
      this.transactionForm.controls['amount'].setValue(this.transaction.amount)
      this.transactionForm.controls['description'].setValue(this.transaction.description)
      this.transactionForm.controls['recurring'].setValue(this.transaction.recurring)
      this.transactionForm.controls['category'].setValue(this.transaction.category.id)
      this.transactionForm.controls['account'].setValue(this.transaction.account.id)
    }))
  }

  deleteTransaction() {
    this.transactionService.deleteTransaction(this.transactionId)
        .subscribe(() => {
          this.router.navigate([`/transactions/${this.accountId}`]);
          this.updateService.setEditId(-1);
        });
  }

  saveTransaction() {
    const formData = this.transactionForm.value;

    const accountId = parseInt(formData.account)
    const categoryId = parseInt(formData.category)
    const account: Account = this.accounts.find(account => account.id === accountId)!
    const category: Category = this.categories.find(category => category.id === categoryId)!

    console.log(formData)

    let transaction: Transaction = {
      id: this.transactionId === -1 ? undefined : this.transactionId,
      date: formData.date || new Date(),
      amount: formData.amount,
      description: formData.description,
      recurring: formData.recurring,
      category,
      account,
    };

    if (this.transactionId === -1) {
      this.transactionService.createTransaction(transaction)
        .subscribe(() => {
          this.router.navigate([`/transactions/${this.accountId}`]),
          this.updateService.setEditId(-1);
        });
    } else {
      this.transactionService.updateTransaction(transaction)
        .subscribe(() => {
          this.router.navigate([`/transactions/${this.accountId}`]),
          this.updateService.setEditId(-1);
        });
    }
  }
}

/*
export class TransactionFormComponent {
  accountId: number = -1;
  transactionId: number = -1;
  transaction?: Transaction;
  accounts: Account[] = [];
  categories: Category[] = [];
  transactionForm: FormGroup;

  constructor(
    private accountService: AccountService,
    private transactionService: TransactionService,
    private categoryService: CategoryService,
    private updateService: UpdateService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.transactionForm = this.fb.group({
      date: [null, Validators.required],
      amount: [null, Validators.required],
      description: [null, Validators.required],
      recurring: [false, Validators.required],
      category: [null, Validators.required],
      account: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadContent()
    this.route.params.subscribe(params => {
      this.accountId = +params['id'];
      if (isNaN(this.accountId)) { this.accountId = -1; }
      this.updateService.setAccountId(this.accountId);
    })
    this.transactionId = this.updateService.getEditId();
    if(this.transactionId != -1){
      this.loadTransaction(this.transactionId);
    }
  }

  loadContent(){
    this.accountService.getAll().subscribe(
      (data => this.accounts = data));
    this.categoryService.getAll().subscribe(
      (data => this.categories = data ));
  }

  loadTransaction(id: number){
    this.transactionService.getTransactionById(id).subscribe(
      (data => this.transaction = data))
  }

  deleteTransaction() {
    this.transactionService.deleteTransaction(this.transactionId)
        .subscribe(() => {
          this.router.navigate([`/transactions/${this.accountId}`]),
          this.updateService.setEditId(-1);
        });
  }

  saveTransaktion() {
    const formData = this.transactionForm.value;

    const accountId = parseInt(formData.account)
    const categoryId = parseInt(formData.category)
    const account: Account = this.accounts.find(account => account.id === accountId)!
    const category: Category = this.categories.find(category => category.id === categoryId)!


    let transaction: Transaction = {
      id: (this.accountId === -1 ? null : this.transaction!.id)!,
      date: formData.date,
      amount: formData.amount,
      description: formData.description,
      recurring: formData.recurring,
      category,
      account,
    };

    if (this.transactionId === -1) {
      this.transactionService.createTransaction(transaction)
        .subscribe(() => {
          this.router.navigate([`/transactions/${this.accountId}`]),
          this.updateService.setEditId(-1);
        });
    } else {
      this.transactionService.updateTransaction(transaction)
        .subscribe(() => {
          this.router.navigate([`/transactions/${this.accountId}`]),
          this.updateService.setEditId(-1);
        });
    }
  }
}


*/
