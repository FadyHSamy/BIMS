import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  IonButton,
  IonLabel,
  IonMenuButton,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { IconComponent } from 'src/app/shared/components/icon/icon.component';
import { SIDEMENU_DATA } from '../sidebar/sidemenu.data';
import * as layoutActions from '../state/layout.actions';
import {
  selectCurrentPath,
  selectIsScreenSizeSmall,
  selectIsSidebarOpen,
} from '../state/layout.selectors';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonLabel,
    IonToolbar,
    IconComponent,
    AsyncPipe,
    IonMenuButton,
  ],
})
export class NavbarComponent implements OnInit {
  readonly sideMenuData = SIDEMENU_DATA;
  store = inject(Store);

  currentPage$ = this.store
    .select(selectCurrentPath)
    .pipe(map((path) => this.sideMenuData.find((menu) => menu.route === path)));

  isSideBarOpen$ = this.store.select(selectIsSidebarOpen);

  isScreenSizeSmall$ = this.store.select(selectIsScreenSizeSmall);

  constructor() {}

  ngOnInit() {}

  BTN_OpenSideBar() {
    this.store.dispatch(layoutActions.openSidebar());
  }
}
