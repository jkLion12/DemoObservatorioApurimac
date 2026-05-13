import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuAbierto = false;
  dropdownOpen = false;

  constructor(private router: Router){

  }

  private closeMenus() {
    this.menuAbierto = false;
    this.dropdownOpen = false;
  }

  //funciones para redireccionar
  redirectToabout(){
    this.closeMenus();
    this.router.navigate(['/about']); // '

  }
  redirectToContact(){
    this.closeMenus();
    this.router.navigate(['/contact']); // '

  }
  redirectToInicio(){
    this.closeMenus();
    this.router.navigate(['/home']); // '
  }
  redirectToInfografias(){
    this.closeMenus();
    this.router.navigate(['/infografias']); // '
  }
  
  redirectToMarcoConceptual(){
    this.closeMenus();
    this.router.navigate(['/marco-conceptual']); // '
  }
  
  
  redirectToNoticias(){
    this.closeMenus();
    this.router.navigate(['/noticias']); // '
  }
  
  redirectToSistemaRegional(){
    this.closeMenus();
    this.router.navigate(['/sistema-regional']); // '
  }
  redirectToVideos(){
    this.closeMenus();
    this.router.navigate(['/videos']); // '
  }
  redirectToRepositorio(){
    this.closeMenus();
    this.router.navigate(['/repositorio']); // '
  }
  // redirectToDashboard() {
  //   window.open('/dashboard', '_blank');
  // }
  
  redirectToDashboard() {
    this.router.navigate(['/login'])
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
    if (this.menuAbierto) {
      this.dropdownOpen = false;
    }
  }

  toggleDropdown(event?: Event) {
    event?.preventDefault();
    this.dropdownOpen = !this.dropdownOpen;
  }

  openDropdown() {
    this.dropdownOpen = true;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

}
