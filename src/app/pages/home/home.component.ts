import {AfterViewInit, Component, Inject, PLATFORM_ID} from '@angular/core';
import {RouterLink} from '@angular/router';
import Typed from 'typed.js';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const typed = new Typed('#typed-text', {
        strings: [
          'Hello, I am Hager Essam',
          'Full-Stack Developer'
        ],
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 1000,
        loop: false,
        showCursor: true,
        onComplete: () => {
          const typedEl = document.getElementById('typed-text');
          const staticEl = document.getElementById('static-text');
          if (typedEl) typedEl.style.display = 'none';
          if (staticEl) staticEl.classList.remove('hidden');
        }
      });
    }
  }
}
