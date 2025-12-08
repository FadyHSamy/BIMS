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
  IonIcon,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonToolbar,
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
  imports: [
    IonIcon,
    IonToolbar,
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

  toggleSidebar(): void {
    this.store.dispatch(LayoutActions.toggleSidebar());
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    const width = (event.target as Window).innerWidth;
    this.adjustSidebar(width);
  }

  private adjustSidebar(width: number): void {
    if (width <= 991) {
      this.store.dispatch(LayoutActions.closeSidebar());
    } else {
      this.store.dispatch(LayoutActions.openSidebar());
    }
  }
}
