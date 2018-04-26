import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Category} from '../shared/category.model';

@Component({
  selector: 'app-form-add-and-update-category',
  templateUrl: './form-add-and-update-category.component.html',
  styleUrls: ['./form-add-and-update-category.component.css']
})
export class FormAddAndUpdateCategoryComponent implements OnInit {
  @Input() categoryId: number;
  @Input() category: Category;
  isOpen: boolean;

  constructor() { }

  changeStatusModalWindow(newStatus: boolean) {
    this.isOpen = newStatus;
  }

  ngOnInit() {
    this.isOpen = false;
  }
}
