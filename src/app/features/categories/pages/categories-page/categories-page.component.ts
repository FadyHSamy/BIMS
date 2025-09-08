import { Component } from '@angular/core';
import { CategoriesListComponent } from '../../components/categories-list/categories-list.component';

@Component({
  selector: 'app-categories-page',
  imports: [CategoriesListComponent],
  templateUrl: './categories-page.component.html',
  styleUrl: './categories-page.component.scss',
})
export class CategoriesPageComponent {}
