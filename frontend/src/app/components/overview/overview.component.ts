import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from '../../models/account';
import { AccountService } from '../../services/account/account.service';
import { UpdateService } from '../../services/update/update.service';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category/category.service';


@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  accountId: number = -1;
  accounts: Account[] = [];
  categories: Category[] = [];

  constructor(
    private accountService: AccountService,
    private categoryService: CategoryService,
    private updateService: UpdateService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadContent();
    this.route.params.subscribe(params => {
      this.accountId = +params['id'];
      if (isNaN(this.accountId)) {this.accountId = -1;}
      this.updateService.setAccountId(this.accountId);
    })
  }

  loadContent(){
    this.accountService.getAll().subscribe(
      (data => this.accounts = data));
    this.categoryService.getAll().subscribe(
      (data => this.categories = data ));
  }

  getAccountById(id: number): Account | null {
    for(let account of this.accounts){
      if (id == account.id){
        return account;
      }
    }
    return null;
  }

  createCategory(){
    this.updateService.setEditId(-1);
    this.router.navigate([`/catform/${this.accountId}`]);
  }

  updateCategory(id: number){
    this.updateService.setEditId(id);
    this.router.navigate([`/catform/${this.accountId}`]);
  }
}
