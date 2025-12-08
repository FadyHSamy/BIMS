import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { ICONS } from './core/icons';
import { selectTheme } from './core/layout/state/layout.selectors';
import { IconRegistryService } from './core/services/icon-registry';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit, OnDestroy {
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
        document.documentElement.classList.toggle(
          'ion-palette-dark',
          theme === 'dark'
        );
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
