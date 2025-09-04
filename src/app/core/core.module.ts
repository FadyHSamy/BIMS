import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriesModule } from "../features/categories/categories.module";
import { LoaderComponent } from '../shared/components/loader/loader.component';
import { SharedModule } from "../shared/shared.module";
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, SharedModule, CategoriesModule,LoaderComponent],
  exports: [SidebarComponent],
})
export class CoreModule {}
