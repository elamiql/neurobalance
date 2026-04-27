import { Component } from '@angular/core';
import { NavegacionService } from '../../navegacion';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuAbierto: boolean = false;
  subMenuAbierto: boolean = false;

  constructor(public navService: NavegacionService) {}

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  toggleSubMenu(event: Event) {
    event.stopPropagation();
    this.subMenuAbierto = !this.subMenuAbierto;
  }

  navegar(seccion: string) {
    this.navService.cambiarSeccion(seccion);
    this.menuAbierto = false;
    this.subMenuAbierto = false;
  }

  cerrarMenus() {
  this.menuAbierto = false;
  this.subMenuAbierto = false;
}
}