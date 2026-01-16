import { Component, signal } from '@angular/core';
import {RouterLink, RouterOutlet } from '@angular/router';
import { Products } from './components/products/products';
import { Body } from './components/body/body';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Products,Body,Header,Footer,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular3');
}
