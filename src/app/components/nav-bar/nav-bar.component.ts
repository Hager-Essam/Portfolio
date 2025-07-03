import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  templateUrl: './nav-bar.component.html',
  standalone: true,
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  isLightMode = false;

  toggleTheme() {
    this.isLightMode = !this.isLightMode;
    const html = document.documentElement;
    if (this.isLightMode) {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
  }
}
