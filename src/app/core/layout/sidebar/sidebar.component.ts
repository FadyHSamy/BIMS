import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SIDEMENU_DATA } from './sidemenu.data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  standalone: true,
  imports: [CommonModule, RouterLink],
})
export class SidebarComponent {
  readonly sidemenuData = SIDEMENU_DATA;
}
