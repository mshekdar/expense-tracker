import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryHomeComponent } from './category-home/category-home.component';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesService } from './services/categories.service';

const categoryRoutes: Routes = [
  {
    path: '',
    component: CategoryHomeComponent
  }
]

@NgModule({
  declarations: [
    CategoryHomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(categoryRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CategoriesService
  ]
})
export class CategoriesModule { }
