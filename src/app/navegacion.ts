import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavegacionService {
  seccionActiva: string = 'inicio';

scrollAQuienesSomos() {
  document.getElementById('quienes-somos')?.scrollIntoView({ behavior: 'smooth' });
}
}