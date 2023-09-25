import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './feauters/category/category-list/category-list.component';
import { AddCategoryComponent } from './feauters/category/add-category/add-category.component';
import { EditCategoryComponent } from './feauters/category/edit-category/edit-category.component';
import { LoginComponent } from './feauters/auth/login/login.component';
import { CarsComponent } from './feauters/Car/cars/cars.component';
import { CarfromComponent } from './feauters/bookcar/carfrom/carfrom.component';
import { CarTransComponent } from './feauters/Carconfirm/car-trans/car-trans.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin/categories',
    component: CategoryListComponent
  },
  {
    path: 'admin/categories/add',
    component: AddCategoryComponent
  },
  {
    path: 'admin/categories/:id',
    component: EditCategoryComponent
  },
  {
    path: 'buycars',
    component: CarsComponent
  },
  {
    path: 'bookcar',
    component: CarfromComponent
  },
  {
    path: 'bookcar/confirm',
    component: CarTransComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
