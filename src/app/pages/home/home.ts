import { Component, OnInit, inject, signal } from '@angular/core';
import { NavegacionService } from '../../navegacion';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit{
  private http = inject(HttpClient);
  public navService = inject(NavegacionService);

  datosOng = signal<any>(null);

slidesCarrusel = signal([
    {
      imagen: 'fotos/foto1.jpg',
    },
    {
      imagen: 'fotos/foto2.jpg',
    }
  ]);

  currentSlide = signal(0);

  nextSlide() {
    this.currentSlide.update(current => current === this.slidesCarrusel().length - 1 ? 0 : current + 1);
  }

  prevSlide() {
    this.currentSlide.update(current => current === 0 ? this.slidesCarrusel().length - 1 : current - 1);
  }
  ngOnInit(): void {
    this.http.get('/datos-ong.json').subscribe(res => {this.datosOng.set(res)});
  }
}