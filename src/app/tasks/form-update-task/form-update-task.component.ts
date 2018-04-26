import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../shared/task.model';

@Component({
  selector: 'app-form-update-task',
  templateUrl: './form-update-task.component.html',
  styleUrls: ['./form-update-task.component.css']
})
export class FormUpdateTaskComponent implements OnInit {
  @Input() task: Task;
  isOpen: boolean;
  constructor() { }

  changeStatusModalWindow(newStatus: boolean) {
    this.isOpen = newStatus;
  }

  ngOnInit() {
    this.isOpen = false;
  }
}
