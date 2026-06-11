import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, Router, NavigationStart } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter } from 'rxjs/operators';
import { DatosOngService } from '../../services/datos-ong.services';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  private router = inject(Router);
  private datosOngService = inject(DatosOngService);

  menuAbierto = false;
  subMenuAbierto = false;

  datosOng = toSignal(this.datosOngService.datosOng$, { initialValue: null });

  constructor() {
    this.router.events
      .pipe(filter(e => e instanceof NavigationStart))
      .subscribe(() => this.cerrarMenus());
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