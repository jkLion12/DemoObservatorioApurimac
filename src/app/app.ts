import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { dashboardNav, portalNav } from './demo-data';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = 'DemoObservatorioApurimac';
  protected readonly portalNav = portalNav;
  protected readonly dashboardNav = dashboardNav;
}
