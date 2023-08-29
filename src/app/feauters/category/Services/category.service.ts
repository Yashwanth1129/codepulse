import { Injectable } from '@angular/core';
import { AddCategoryRequest } from '../models/add-category-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Category } from '../models/category.model';
import { environment } from 'src/environments/environment';
import { UpdateCategoryRequest } from '../models/update-category-request.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient,
    private cookieService: CookieService) { }


  addCategory(model: AddCategoryRequest): Observable<void>{
    return this.http.post<void>('https://localhost:7147/api/categories', model);

  }

  getAllCategories(): Observable<Category[]>{
    return this.http.get<Category[]>('https://localhost:7147/api/Categories');


  }
  getCategoryById(id: string): Observable<Category> {
    return this.http.get<Category>('https://localhost:7147/api/categories/F33CAD9F-1D72-49D3-CE50-08DB9319993D');
  }
  updateCategory(id: string, updateCategoryRequest: UpdateCategoryRequest): Observable<Category>{
    return this.http.put<Category>('https://localhost:7147/api/categories/F33CAD9F-1D72-49D3-CE50-08DB9319993D',updateCategoryRequest);

  }
  deleteCategory(id: string) : Observable<Category>{
    return this.http.delete<Category>('https://localhost:7147/api/categories/F33CAD9F-1D72-49D3-CE50-08DB9319993D')
  } 
}
