import { Component, signal } from '@angular/core';
import { Header } from './shared/header/header';
import { Home  } from './pages/home/home';
import { Footer } from './shared/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('neurobalance-ong');
}
