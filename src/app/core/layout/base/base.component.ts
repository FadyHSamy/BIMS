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
import { LoaderComponent } from '../../../shared/components/loader/loader.component';
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
    LoaderComponent,
  ],
})
export class BaseComponent implements OnInit {
  store = inject(Store);
  menuCtrl = inject(MenuController);

  isSideBarOpen$ = this.store.select(selectIsSidebarOpen);
  isScreenSizeSmall$ = this.store.select(selectIsScreenSizeSmall);

  ngOnInit() {

    this.isSideBarOpen$
      .pipe(distinctUntilChanged())
      .subscribe(async (isOpen) => {
        
        if (isOpen) {
          await this.menuCtrl.enable(true, 'main-menu');
          await this.menuCtrl.open('main-menu');
        } else {
          await this.menuCtrl.close('main-menu');
        }
      });
  }

  onMenuClosed() {
    this.store.dispatch(LayoutActions.closeSidebar());
  }
}
