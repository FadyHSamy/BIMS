import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GetCategories } from '../../shared/models/categories/get-categories.model';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  getCategories(): Observable<Array<GetCategories>> {
    return of([
      {
        CategoryId: 1,
        CategoryName: 'Product 1',
        CategoryDesc: 'Test Category',
        CreatedAt: '2025-01-01'
      },
      {
        CategoryId: 2,
        CategoryName: 'Product 2',
        CategoryDesc: 'Another Category',
        CreatedAt: '2025-01-02'
      }
    ]);
  }
}
