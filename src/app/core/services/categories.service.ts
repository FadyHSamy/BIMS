import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetCategories } from '../../features/categories/models/categories/get-categories.model';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  http = inject(HttpClient);

  getCategories(): Observable<Array<GetCategories>> {
    return this.http.get<Array<GetCategories>>('/api/Categories');
  }
}
