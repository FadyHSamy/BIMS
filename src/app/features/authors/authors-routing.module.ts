import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/authors-page/authors-page.component').then((m) => m.AuthorsPageComponent),
  },
  {
    path: 'add',
    loadComponent: () =>
      import('./pages/author-add-page/author-add-page.component').then(
        (m) => m.AuthorAddPageComponent
      ),
  },
  {
    path: 'edit/:id',
    loadComponent: () =>
      import('./pages/author-edit-page/author-edit-page.component').then(
        (m) => m.AuthorEditPageComponent
      ),
  },
];
