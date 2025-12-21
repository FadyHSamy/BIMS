import { Component, inject, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MenuController } from '@ionic/angular';
import {
  IonContent,
  IonHeader,
  IonMenu,
  IonRouterOutlet,
  IonSplitPane,
} from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { distinctUntilChanged } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import * as LayoutActions from '../state/layout.actions'; // Import Actions
import {
  selectIsScreenSizeSmall,
  selectIsSidebarOpen,
} from '../state/layout.selectors';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss',
  standalone: true,
  imports: [
    IonHeader,
    IonContent,
    IonSplitPane,
    IonRouterOutlet,
    CommonModule,
    RouterModule,
    SidebarComponent,
    IonMenu,
    NavbarComponent,
  ],
})
export class BaseComponent implements OnInit {
  store = inject(Store);
  menuCtrl = inject(MenuController);

  isSideBarOpen$ = this.store.select(selectIsSidebarOpen);
  isScreenSizeSmall$ = this.store.select(selectIsScreenSizeSmall);

  ngOnInit() {
    // Subscribe to state changes to drive the UI
    this.isSideBarOpen$
      .pipe(distinctUntilChanged()) // Prevent duplicate triggers
      .subscribe(async (isOpen) => {
        // If we are on mobile (not split pane), we must toggle manually
        if (isOpen) {
          await this.menuCtrl.enable(true, 'main-menu');
          await this.menuCtrl.open('main-menu');
        } else {
          await this.menuCtrl.close('main-menu');
        }
      });
  }

  // Handle the User Interface closing the menu (e.g. clicking the backdrop)
  // This keeps the NgRx store in sync with the UI
  onMenuClosed() {
    this.store.dispatch(LayoutActions.closeSidebar());
  }
}
