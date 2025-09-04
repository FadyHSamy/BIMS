import { Routes } from '@angular/router';
import { BaseComponent } from './core/layout/base/base.component';

export const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: '', redirectTo: 'categories', pathMatch: 'full' },
      {
        path: 'categories',
        loadChildren: () =>
          import('./features/categories/categories-routing.module').then((m) => m.routes),
      },
    ],
  },
];
