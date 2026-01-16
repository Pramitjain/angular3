import { Component ,signal,effect } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  // Signal to track theme: 'light' or 'dark'
  theme = signal<'light' | 'dark'>('dark');

  constructor() {
    // This 'effect' runs whenever the theme signal changes
    effect(() => {
      document.documentElement.setAttribute('data-bs-theme', this.theme());
    });
  }

  toggleTheme() {
    this.theme.update(current => current === 'light' ? 'dark' : 'light');
  }

}
