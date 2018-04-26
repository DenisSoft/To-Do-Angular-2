import {Injectable} from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import * as CATEGORY from './categories.actions';

@Injectable()
export class CategoryService {

  constructor(private store: Store<fromRoot.State>) {
  }

  addCategory(title: string, idParentCategory: number) {
    this.store.dispatch(new CATEGORY.AddCategory(title, idParentCategory));
  }

  deleteCategory(id: number) {
    this.store.dispatch(new CATEGORY.DeleteCategory(id));
  }

  updateCategory(id: number, title: string, idParentCategory: number, listIdChildrenCategory: number[]) {
    this.store.dispatch(new CATEGORY.UpdateCategory(id, title, idParentCategory, listIdChildrenCategory));
  }
}
