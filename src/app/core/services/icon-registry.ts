import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class IconRegistryService {
  // A map to store the icon name and its SVG string
  private registry = new Map<string, string>();

  constructor(private sanitizer: DomSanitizer) {}

  // Method to add an icon to the registry
  public registerIcon(name: string, svg: string): void {
    this.registry.set(name, svg);
  }

  // Method to get a safe, sanitized SVG from the registry
  public getIcon(name: string): SafeHtml | undefined {
    const svg = this.registry.get(name);
    if (!svg) {
      console.error(`Icon '${name}' not found.`);
      return undefined;
    }
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
