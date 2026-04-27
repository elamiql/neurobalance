import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  private http = inject(HttpClient);
  datosOng = signal<any>(null);

  menuAbierto = false;
  subMenuAbierto = false;

  ngOnInit(): void {
    this.http.get('/datos-ong.json').subscribe(res => this.datosOng.set(res));
  }

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  toggleSubMenu(event: Event) {
    event.stopPropagation();
    this.subMenuAbierto = !this.subMenuAbierto;
  }

  cerrarMenus() {
    this.menuAbierto = false;
    this.subMenuAbierto = false;
  }
}