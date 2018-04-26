import { Action } from '@ngrx/store';

export const UPDATE_FILTER_TASKS = '[FTasks] Update Filter Tasks';

export class UpdateFilterTasks implements Action {
  readonly type = UPDATE_FILTER_TASKS;
  constructor(public title: string,
              public isDone: boolean) {}
}

export type FilterTasksActions = UpdateFilterTasks;

