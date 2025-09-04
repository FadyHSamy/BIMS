import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectLoading } from '../../../features/settings/state/settings.selectors';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class LoaderComponent implements OnInit {
  store = inject(Store);
  loader$ = this.store.select(selectLoading);
  ngOnInit(): void {}
}
