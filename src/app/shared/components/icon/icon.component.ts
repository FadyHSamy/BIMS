import { Component, inject, Input, OnChanges } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { selectTheme } from '../../../core/layout/state/layout.selectors';
import { IconRegistryService } from '../../../core/services/icon-registry';

@Component({
  selector: 'app-icon',
  template: `<span [innerHTML]="svg" class="icon-wrapper"></span>`,
  styles: [
    `
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
      }
      .icon-wrapper ::ng-deep svg {
        width: 100%;
        height: 100%;
      }
    `,
  ],
})
export class IconComponent implements OnChanges {
  store = inject(Store);
  theme$ = this.store.select(selectTheme);

  @Input() name: string = '';
  svg?: SafeHtml;

  constructor(private iconRegistry: IconRegistryService) {}

  ngOnChanges(): void {
    this.svg = this.iconRegistry.getIcon(this.name);
  }
}
