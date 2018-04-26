import { Action } from '@ngrx/store';

export const ADD_CATEGORY = '[Category] Add Category';
export const DELETE_CATEGORY = '[Category] Delete Category';
export const UPDATE_CATEGORY = '[Category] Update Category';

export class AddCategory implements Action {
  readonly type = ADD_CATEGORY;
  constructor(public title: string,
              public idParentCategory: number) {}
}

export class DeleteCategory implements Action {
  readonly type = DELETE_CATEGORY;
  constructor(public id: number) {}
}

export class UpdateCategory implements Action {
  readonly type = UPDATE_CATEGORY;
  constructor(public id: number,
              public title: string,
              public idParentCategory: number,
              public listIdChildrenCategory: number[]) {}
}

export type CategoriesActions = AddCategory | DeleteCategory | UpdateCategory;

