import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCategories from './categories/shared/categories.reducer';
import * as fromFilterCategories from './categories/filter-categories/filter-categories.reducer';
import * as fromTasks from './tasks/shared/tasks.reducer';
import * as fromFilterTasks from './tasks/filter-tasks/filter-tasks.reducer';

export interface State {
  openCategories: fromFilterCategories.State;
  categories: fromCategories.State;
  tasks: fromTasks.State;
  filterTask: fromFilterTasks.State;
}

export const reducers: ActionReducerMap<State> = {
  openCategories: fromFilterCategories.filterCategoryReducer,
  categories: fromCategories.categoryReducer,
  tasks: fromTasks.taskReducer,
  filterTask: fromFilterTasks.filterTasksReducer
};

export const getTasksState = (state: State) => state.tasks;
export const getTasks = createSelector(getTasksState, fromTasks.getTasks);

export const getFilterTasksState = (state: State) => state.filterTask;
export const getFilterTasks = createSelector(getFilterTasksState, fromFilterTasks.getFilterTasks);

export const getCategoriesState = (state: State) => state.categories;
export const getCategories = createSelector(getCategoriesState, fromCategories.getCategories);

export const getOpenCategoriesState = (state: State) => state.openCategories;
export const getOpenCategories = createSelector(getOpenCategoriesState, fromFilterCategories.getOpenCategories);



