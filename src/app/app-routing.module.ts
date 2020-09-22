import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as ExpenseComponents from './expenses/index';
import * as CategoryComponents from './categories/index';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'expenses',
    component: ExpenseComponents.ExpenseHomeComponent
  },
  {
    path: 'categories',
    component: CategoryComponents.CategoryHomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
