import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import { CategoryService } from '../shared/category.service';
import {Category} from '../shared/category.model';

@Component({
  selector: 'app-add-and-update-category',
  templateUrl: './add-and-update-category.component.html',
  styleUrls: ['./add-and-update-category.component.css'],
})
export class AddAndUpdateCategoryComponent implements OnInit {
  @Input() categoryId: number;
  @Input() category: Category;
  @Output() changeStatusModalWindow = new EventEmitter<boolean>();

  constructor(private categoryService: CategoryService) {
  }

  addCategory$(newTitle: HTMLInputElement): boolean {
    if (newTitle.value) {
      if (!this.category) {
        this.categoryService.addCategory(newTitle.value, this.categoryId || 0);
      } else {
        this.categoryService.updateCategory(
          this.category.id,
          newTitle.value,
          this.category.idParentCategory,
          this.category.listIdChildrenCategory);
      }
      newTitle.value = '';
      this.changeStatusModalWindow.emit(false);
    }
    return false;
  }

  ngOnInit() {
  }
}
