import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';

@NgModule({
  declarations: [CategoriesListComponent], // ✅ fix
  imports: [CommonModule],
  exports: [CategoriesListComponent],
})
export class CategoriesModule {}
