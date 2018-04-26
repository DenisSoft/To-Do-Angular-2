import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { MainComponent } from './core/main/main.component';
import { AddAndUpdateCategoryComponent } from './categories/add-and-update-category/add-and-update-category.component';
import { CategoriesListComponent } from './categories/categories-list/categories-list.component';
import { SearchBarComponent } from './tasks/search-bar/search-bar.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import {CategoryService} from "./categories/shared/category.service";
import {FilterCategoriesService} from "./categories/filter-categories/filter-categories.service";
import { reducers } from './app.reducer';
import { FormAddAndUpdateCategoryComponent } from './categories/form-add-and-update-category/form-add-and-update-category.component';
import { ModalComponent } from './core/modal/modal.component';
import {TaskService} from "./tasks/shared/task.service";
import { DeleteComponent } from './core/delete/delete.component';
import { AddTaskComponent } from './tasks/add-task/add-task.component';
import { FormUpdateTaskComponent } from './tasks/form-update-task/form-update-task.component';
import { UpdateTaskComponent } from './tasks/update-task/update-task.component';


const appRoutes: Routes = [
  { path: 'category/:id', component: MainComponent, pathMatch: 'full'},
  { path: '**', component: MainComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
    AddAndUpdateCategoryComponent,
    CategoriesListComponent,
    SearchBarComponent,
    TasksListComponent,
    FormAddAndUpdateCategoryComponent,
    ModalComponent,
    DeleteComponent,
    AddTaskComponent,
    FormUpdateTaskComponent,
    UpdateTaskComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    StoreModule.forRoot(reducers),
    RouterModule.forRoot( appRoutes, { enableTracing: true })
  ],
  providers: [
    CategoryService,
    FilterCategoriesService,
    TaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
