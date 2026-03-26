import { Component } from '@angular/core';
import { NavegacionService } from '../../navegacion';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuAbierto: boolean = false;

  constructor(public navService: NavegacionService) {}

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  navegar(seccion: string) {
    this.navService.cambiarSeccion(seccion);
    this.menuAbierto = false; 
  }
}