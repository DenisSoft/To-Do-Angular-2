import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import {Task} from '../../tasks/shared/task.model';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  progress$: number;
  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.store.select(fromRoot.getTasks).subscribe(res => {
      this.whatProgress(res);
    });
  }

  whatProgress(tasks: Task[]) {
    const totalNumberTasks = tasks.length;
    const numberCompletedTasks = tasks.filter((task) => task.isDone === true).length;
    this.progress$ = 100 / totalNumberTasks * numberCompletedTasks;
  }
}
