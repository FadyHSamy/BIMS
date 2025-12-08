import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import {
  IonContent,
  IonHeader,
  IonMenu,
  IonRouterOutlet,
  IonSplitPane,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { CategoriesListComponent } from "src/app/features/categories/components/categories-list/categories-list.component";
import { IconComponent } from "src/app/shared/components/icon/icon.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { SidebarComponent } from '../sidebar/sidebar.component';
import { selectIsSidebarOpen } from '../state/layout.selectors';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss',
  standalone: true,
  imports: [IonTitle, IonToolbar, IonHeader, IonContent,
    IonSplitPane,
    IonRouterOutlet,
    CommonModule,
    RouterModule,
    SidebarComponent,
    IonMenu, CategoriesListComponent, IconComponent, NavbarComponent],
})
export class BaseComponent {
  store = inject(Store);
  isSidebarOpen$ = this.store.select(selectIsSidebarOpen);
}
