import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { CategoriesModule } from './features/categories/categories.module';


@Component({
  selector: 'app-root',
  imports: [CommonModule, CategoriesModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('BIMS');
}
