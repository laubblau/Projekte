import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { OverviewComponent } from "./components/overview/overview.component";
import { TransactionsComponent } from "./components/transactions/transactions.component";
import { TargetsComponent } from "./components/targets/targets.component";
import { AccountFormComponent } from './forms/account-form/account-form.component';
import { CategoryFormComponent } from './forms/category-form/category-form.component';
import { TransactionFormComponent } from './forms/transaction-form/transaction-form.component';

const routes: Routes = [
  {path:"", redirectTo:"home/-1", pathMatch:"full"},
  {path:"home/:id", component: HomeComponent},
  {path:"overview/:id", component: OverviewComponent},
  {path:"transactions/:id", component: TransactionsComponent},
  {path:"targets/:id", component: TargetsComponent},
  {path:"accform/:id", component: AccountFormComponent},
  {path:"catform/:id", component: CategoryFormComponent},
  {path:"traform/:id", component: TransactionFormComponent},
  {path:"**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
