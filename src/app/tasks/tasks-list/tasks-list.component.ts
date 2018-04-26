import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import {Task} from '../shared/task.model';
import {TaskService} from '../shared/task.service';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  categoryId: number;
  tasks$: Observable<Task[]>;
  paramFilterTasks: {
    title: string,
    isDone: boolean
  };

  constructor(private taskService: TaskService,
              private route: ActivatedRoute,
              private store: Store<fromRoot.State> ) {  }

  changeStatus$(id: number) {
    this.taskService.changeStatus(id);
  }
  deleteTask$(id: number) {
    this.taskService.deleteTask(id);
  }

  filterTasks$ (id: number, title?: string, isDone?: boolean) {
    this.tasks$ = this.store.select(fromRoot.getTasks)
      .map( tasks => tasks.filter(task => (
        (id === task.idCategory) &&
        (isDone ? isDone === task.isDone : 1) &&
        (title ? (task.title.indexOf(title) + 1) : 1)
        )
      ));
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.categoryId = +params.get('id');
      this.filterTasks$( +params.get('id'));
    });

    this.store.select(fromRoot.getFilterTasks).subscribe(res => {
      this.paramFilterTasks = res;
      this.filterTasks$( this.categoryId, this.paramFilterTasks.title, this.paramFilterTasks.isDone);
    });
  }
}
