import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './components/home/home.component';
import { OverviewComponent } from './components/overview/overview.component';
import { TransactionsComponent } from './components/transactions/transactions.component';
import { TargetsComponent } from './components/targets/targets.component';
import { AccountFormComponent } from './forms/account-form/account-form.component';
import { TransactionFormComponent } from './forms/transaction-form/transaction-form.component';
import { CategoryFormComponent } from './forms/category-form/category-form.component';
import { TargetFormComponent } from './forms/target-form/target-form.component';
import { DebtFormComponent } from './forms/debt-form/debt-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    OverviewComponent,
    TransactionsComponent,
    TargetsComponent,
    AccountFormComponent,
    TransactionFormComponent,
    CategoryFormComponent,
    TargetFormComponent,
    DebtFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
