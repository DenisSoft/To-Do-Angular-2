import { Action } from '@ngrx/store';

export const ADD_TASK = '[Task] Add Task';
export const DELETE_TASK = '[Task] Delete Task';
export const UPDATE_TASK = '[Task] Update Task';
export const CHANGE_STATUS = '[Task] Change Status';

export class AddTask implements Action {
  readonly type = ADD_TASK;
  constructor(public isDone: boolean,
              public title: string,
              public idCategory: number) {}
}

export class DeleteTask implements Action {
  readonly type = DELETE_TASK;
  constructor(public id: number) {}
}

export class UpdateTask implements Action {
  readonly type = UPDATE_TASK;
  constructor(public id: number,
              public isDone: boolean,
              public title: string,
              public idCategory: number,
              public description: string) {}
}

export class ChangeStatus implements Action {
  readonly type = CHANGE_STATUS;
  constructor(public id: number) {}
}

export type TaskActions = AddTask | DeleteTask | UpdateTask | ChangeStatus;

