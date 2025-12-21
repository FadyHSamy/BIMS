import { Component, Input, OnChanges } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
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
  @Input() name: string = '';
  svg?: SafeHtml;

  constructor(private iconRegistry: IconRegistryService) {}

  ngOnChanges(): void {
    this.svg = this.iconRegistry.getIcon(this.name);
  }
}
