import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseComponent } from './core/layout/base/base.component';
import { LoaderComponent } from "./shared/components/loader/loader.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, BaseComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.scss',
})
export class App {}
