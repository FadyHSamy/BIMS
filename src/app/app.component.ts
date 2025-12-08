import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router } from '@angular/router';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { Store } from '@ngrx/store';
import { filter, Subject, takeUntil } from 'rxjs';
import { ICONS } from './core/icons';
import * as layoutActions from './core/layout/state/layout.actions';
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
  router = inject(Router);

  ngOnInit(): void {
    this.handleTheme();
    this.registerIcons();
    this.setRouterEvent();
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
  setRouterEvent() {
    this.router.events
      .pipe(
        filter(
          (event: Event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        console.log('Navigated to:', event.urlAfterRedirects);

        this.store.dispatch(
          layoutActions.setCurrentPath({ currentPage: event.urlAfterRedirects })
        );
      });
  }
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
