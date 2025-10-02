import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { ICONS } from './core/icons';
import { BaseComponent } from './core/layout/base/base.component';
import { selectTheme } from './core/layout/state/layout.selectors';
import { IconRegistryService } from './core/services/icon-registry';
import { LoaderComponent } from './shared/components/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, BaseComponent, LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>();

  iconRegistry = inject(IconRegistryService);
  store = inject(Store);

  ngOnInit(): void {
    this.handleTheme();
    this.registerIcons();
  }

  registerIcons() {
    for (const [name, svg] of Object.entries(ICONS)) {
      this.iconRegistry.registerIcon(name, svg);
    }
  }

  handleTheme() {
    this.store
      .select(selectTheme)
      .pipe(takeUntil(this.destroy$))
      .subscribe((theme) => {
        if (theme === 'dark') {
          document.body.classList.add('dark');
        } else {
          document.body.classList.remove('dark');
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
