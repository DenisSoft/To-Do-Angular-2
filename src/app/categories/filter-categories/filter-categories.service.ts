import { Injectable, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import { Category } from '../shared/category.model';
import * as FC from '../filter-categories/filter-categories.actions';


@Injectable()
export class FilterCategoriesService {
  openCategories: Category[];

  constructor(private store: Store<fromRoot.State>) {
    this.store.select(fromRoot.getCategories).subscribe(res => this.openCategories = res);
  }

  openCloseCategory(id: number) {
    this.store.dispatch(new FC.PushPopCategoryInFilter(id, this.openCategories));
  }

  marginLeft(id: number): number {
    let nesting = 0;
    const countingOfNesting = (idCategory) => {
      const currentCategory = this.openCategories.find((category) => category.id === idCategory);
      if (currentCategory.idParentCategory) {
        nesting++;
        countingOfNesting(currentCategory.idParentCategory);
      }
    };
    countingOfNesting(id);
    return (nesting > 5 ? 5 : nesting) * 41;
  }
}
