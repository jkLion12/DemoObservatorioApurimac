import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'observatorio';
  token: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  getToken() {
    if (typeof window !== 'undefined' && window.localStorage) {
      this.token = localStorage.getItem('token');
      return localStorage.getItem('token');
    }
    return null;
  }
}
