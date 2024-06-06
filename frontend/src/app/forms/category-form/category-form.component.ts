import { Component } from '@angular/core';
import { Category } from '../../models/category';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../../services/category/category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UpdateService } from '../../services/update/update.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.scss'
})
export class CategoryFormComponent {
  accountId: number = -1;
  categoryId: number = -1;
  category?: Category;
  categoryForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private updateService: UpdateService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.categoryForm = this.fb.group({
      name: [null, [Validators.required]],
    })
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.accountId = +params['id'];
      if (isNaN(this.accountId)) { this.accountId = -1; }
      this.updateService.setAccountId(this.accountId);
    })
    this.categoryId = this.updateService.getEditId();
    if(this.categoryId != -1){
      this.loadCategory(this.categoryId);
    }
  }

  loadCategory(id: number){
    this.categoryService.getCategoryById(id).subscribe(
      (data => this.category = data))
  }

  deleteCategory() {
    this.categoryService.deleteCategory(this.categoryId)
        .subscribe(() => {
          this.router.navigate([`/overview/${this.accountId}`]),
          this.updateService.setEditId(-1);
        });
  }

  saveCategory() {
    let category: Category;
    if (this.categoryId === -1) {
        category = {
          name: this.categoryForm.value.name,
          transactions: []
      };
      this.categoryService.createCategory(category)
        .subscribe(() => {
          this.router.navigate([`/overview/${this.accountId}`]),
          this.updateService.setEditId(-1);
        });
    } else {
      category = {
        id: this.category?.id || 0,
        name: this.categoryForm.value.name,
        transactions: this.category?.transactions || []
      };

      this.categoryService.updateCategory(category)
        .subscribe(() => {
          this.router.navigate([`/overview/${this.accountId}`]),
          this.updateService.setEditId(-1);
        });
    }
  }
}
