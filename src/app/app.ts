import { Component, signal } from '@angular/core';
import { Header } from './shared/header/header';
import { Home  } from './pages/home/home';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('neurobalance-ong');
}
