import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Store} from "@ngrx/store";
import {FormBuilder, FormGroup} from "@angular/forms";

import * as fromRoot from '../../app.reducer';
import {Task} from '../shared/task.model';
import {Category} from "../../categories/shared/category.model";
import {TaskService} from "../shared/task.service";

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
  @Output() changeStatusModalWindow = new EventEmitter<boolean>();
  @Input() task: Task;
  formGroup: FormGroup;
  categories: Category[];
  titleCurrentCategory: string;

  constructor(private store: Store<fromRoot.State>,
              private taskService: TaskService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.store.select(fromRoot.getCategories).subscribe(res => this.categories =  res);
    this.titleCurrentCategory = this.categories.find((i) => i.id === this.task.idCategory).title;
    this.formGroup = this.formBuilder.group({
      titleCurrentCategory: [this.titleCurrentCategory],
      idCategory: [this.task.idCategory],
      title: [this.task.title],
      isDone: [this.task.isDone],
      description: [this.task.description],
    });
  }

  submit(form) {
    this.taskService.updateTask(this.task.id, form.value.isDone,
      form.value.title, +form.value.idCategory, form.value.description);
    this.changeStatusModalWindow.emit(false);
  }
}
