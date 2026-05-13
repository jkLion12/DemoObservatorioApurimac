import { AfterViewInit, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements AfterViewInit {
  title = 'observatorio';
  token: string | null = null;
  private readonly document = inject(DOCUMENT);

  constructor(private router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.normalizeLegacyAssetPaths();
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      queueMicrotask(() => this.normalizeLegacyAssetPaths());
    });
  }

  getToken() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.token = localStorage.getItem('token');
      return localStorage.getItem('token');
    }
    return null;
  }

  private normalizeLegacyAssetPaths(): void {
    const baseUrl = new URL('assets/', this.document.baseURI).toString();
    const selectors = this.document.querySelectorAll<HTMLElement>('[src], [href]');

    selectors.forEach((element) => {
      if (element instanceof HTMLImageElement || element instanceof HTMLScriptElement) {
        const value = element.getAttribute('src');
        if (value?.startsWith('../../../assets/') || value?.startsWith('./../../../assets/')) {
          element.setAttribute('src', value.replace(/^(\.\/)?(\.\.\/){3}assets\//, baseUrl));
        }
      }

      if (element instanceof HTMLAnchorElement) {
        const value = element.getAttribute('href');
        if (value?.startsWith('../../../assets/') || value?.startsWith('./../../../assets/')) {
          element.setAttribute('href', value.replace(/^(\.\/)?(\.\.\/){3}assets\//, baseUrl));
        }
      }
    });
  }
}
