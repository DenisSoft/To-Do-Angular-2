import {Injectable, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import * as TASKS from './tasks.actions';


@Injectable()
export class TaskService  implements OnInit {

  constructor(private store: Store<fromRoot.State>) {
  }

  addTask(title: string, idCategory: number) {
    this.store.dispatch(new TASKS.AddTask(false, title, idCategory));
  }

  deleteTask(id: number) {
    this.store.dispatch(new TASKS.DeleteTask(id));
  }

  updateTask(id: number, isDone: boolean, title: string, idCategory: number, description: string) {
    this.store.dispatch(new TASKS.UpdateTask(id, isDone, title, idCategory, description));
  }

  changeStatus(id: number) {
    this.store.dispatch(new TASKS.ChangeStatus(id));
  }
  ngOnInit() {

  }
}


