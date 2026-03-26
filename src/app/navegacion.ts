import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavegacionService {
  seccionActiva: string = 'inicio';

  cambiarSeccion(seccion: string) {
    this.seccionActiva = seccion;
  }
}