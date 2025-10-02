import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { selectIsSidebarOpen } from '../state/layout.selectors';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, SidebarComponent],
})
export class BaseComponent {
  store = inject(Store);
  isSidebarOpen$ = this.store.select(selectIsSidebarOpen);


}
