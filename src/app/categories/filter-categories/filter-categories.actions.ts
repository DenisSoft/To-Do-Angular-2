import { Action } from '@ngrx/store';

import { Category} from '../shared/category.model';

export const PUSH_POP_CATEGORY_IN_FILTER = '[FCategory] Push Pop Category In Filter';

export class PushPopCategoryInFilter implements Action {
  readonly type = PUSH_POP_CATEGORY_IN_FILTER;
  constructor(public id: number,
              public openCategories: Category[]) {}
}

export type FilterCategoriesActions = PushPopCategoryInFilter;

