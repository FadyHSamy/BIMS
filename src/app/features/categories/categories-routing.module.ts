import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/categories-page/categories-page.component').then(
        (m) => m.CategoriesPageComponent
      ),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./pages/category-add-page/category-add-page.component').then(
        (m) => m.CategoryAddPageComponent
      ),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./pages/category-edit-page/category-edit-page.component').then(
        (m) => m.CategoryEditPageComponent
      ),
  },
];
