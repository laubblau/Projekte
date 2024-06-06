import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  private accountId: BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  private accountChanges: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private editId: number = -1;

  constructor() { }

  getAccountId() {
    return this.accountId.asObservable();
  }

  setAccountId(id: number) {
    this.accountId.next(id);
  }

  setAccountChanges() {
    this.accountChanges.next(!this.accountChanges);
  }

  getAccountChanges() {
    return this.accountChanges.asObservable();
  }

  setEditId(id: number) {
    this.editId = id;
  }

  getEditId(): number{
    return this.editId;
  }
}
