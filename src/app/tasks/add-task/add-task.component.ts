import { Component, OnInit } from '@angular/core';

import {TaskService} from '../shared/task.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  idCategory: number;

  constructor(private taskService: TaskService,
              private route: ActivatedRoute) {}

  addTask$( newTask: HTMLInputElement): boolean {
    if (newTask.value) {
      this.taskService.addTask(newTask.value, this.idCategory);
      newTask.value = '';
    }
    return false;
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.idCategory = +params.get('id'));
  }
}
