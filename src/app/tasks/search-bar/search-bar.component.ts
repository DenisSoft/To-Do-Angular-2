import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import * as FTASKS from '../filter-tasks/filter-tasks.actions';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private router: Router,
              private store: Store<fromRoot.State>) {
  }

  searchTasks(value) {
    this.store.dispatch(new FTASKS.UpdateFilterTasks(value.title, value.isDone));
  }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      title: [''],
      isDone: [false]
    });

    this.formGroup.valueChanges.subscribe(value => {
      this.searchTasks(value);
      });
  }
}
