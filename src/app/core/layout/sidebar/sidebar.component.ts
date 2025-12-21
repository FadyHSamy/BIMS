import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  inject,
} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import {
  IonAvatar,
  IonFooter,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList, IonToolbar
} from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { IconComponent } from '../../../shared/components/icon/icon.component';
import * as LayoutActions from '../../layout/state/layout.actions';
import { selectIsSidebarOpen } from '../state/layout.selectors';
import { SIDEMENU_DATA } from './sidemenu.data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true,
  imports: [IonToolbar, IonFooter,
    IonAvatar,
    IonItemDivider,
    IonLabel,
    IonItem,
    IonList,
    CommonModule,
    RouterLink,
    RouterLinkActive,
    IconComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  store = inject(Store);
  readonly sidemenuData = SIDEMENU_DATA;
  readonly userName = 'Fady Hany';
  readonly role = 'Supervisor';
  isSidebarOpen$ = this.store.select(selectIsSidebarOpen);

  constructor() {
    this.adjustSidebar(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = (event.target as Window).innerWidth;
    this.adjustSidebar(width);
  }

  onPageClick() {
    this.store.dispatch(LayoutActions.closeSidebar());
  }

  private adjustSidebar(width: number): void {
    if (width <= 991) {
      this.store.dispatch(LayoutActions.closeSidebar());
      this.store.dispatch(
        LayoutActions.setIsScreenSize({ isScreenSizeSmall: true })
      );
    } else {
      this.store.dispatch(LayoutActions.openSidebar());
      this.store.dispatch(
        LayoutActions.setIsScreenSize({ isScreenSizeSmall: false })
      );
    }
  }
}
