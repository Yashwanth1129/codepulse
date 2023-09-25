import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { CategoryListComponent } from './feauters/category/category-list/category-list.component';
import { AddCategoryComponent } from './feauters/category/add-category/add-category.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EditCategoryComponent } from './feauters/category/edit-category/edit-category.component';
import { LoginComponent } from './feauters/auth/login/login.component';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { CarsComponent } from './feauters/Car/cars/cars.component';
import { CarfromComponent } from './feauters/bookcar/carfrom/carfrom.component';
import { CarTransComponent } from './feauters/Carconfirm/car-trans/car-trans.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    LoginComponent,
    CarsComponent,
    CarfromComponent,
    CarTransComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
