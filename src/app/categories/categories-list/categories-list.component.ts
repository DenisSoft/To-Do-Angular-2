import {Component, OnInit, ChangeDetectorRef, ApplicationRef} from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toArray';

import { Category } from '../shared/category.model';
import { CategoryService } from '../shared/category.service';
import * as fromRoot from '../../app.reducer';
import {FilterCategoriesService} from '../filter-categories/filter-categories.service';


@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {
  categories$: Observable<Category[]>;
  listIdOpenCategories: number[];

  constructor(private categoryService: CategoryService,
              private filterCategoriesService: FilterCategoriesService,
              private store: Store<fromRoot.State> ) {
  }

  isOpenCategory(id: number): boolean {
    return this.listIdOpenCategories.includes(id);
  }

  marginLeft$(id: number): number {
    return this.filterCategoriesService.marginLeft(id);
  }

  openCloseCategory$(id: number) {
    this.filterCategoriesService.openCloseCategory(id);
    this.update();
  }

  deleteCategory$(id: number) {
    this.categoryService.deleteCategory(id);
  }
  update() {
    this.categories$ = this.store.select(fromRoot.getCategories)
      .map( categories => categories.filter(category => this.listIdOpenCategories.includes(category.idParentCategory)));
  }

  ngOnInit() {
    this.store.select(fromRoot.getOpenCategories).subscribe(res => this.listIdOpenCategories = res);
    this.update();
  }
}
