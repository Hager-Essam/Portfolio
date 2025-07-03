import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
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
