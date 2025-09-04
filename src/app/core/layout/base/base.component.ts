import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core.module';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrl: './base.component.scss',
  standalone: true,
  imports: [CoreModule, RouterModule],
})
export class BaseComponent {}
