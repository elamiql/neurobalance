import { Component, inject, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatosOngService } from '../../services/datos-ong.services';

interface Profesional {
  _key: string;
  nombre: string;
  rol: string;
  especialidad?: string;
  bio?: string;
  email?: string;
  foto: string;
}

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Nosotros {
  private datosOngService = inject(DatosOngService);
  datosOng = toSignal(this.datosOngService.datosOng$, { initialValue: null });

  profesionalSeleccionado = signal<Profesional | null>(null);

  abrirModal(prof: Profesional) {
    this.profesionalSeleccionado.set(prof);
    document.body.style.overflow = 'hidden';
  }

  cerrarModal() {
    this.profesionalSeleccionado.set(null);
    document.body.style.overflow = '';
  }

  getSanityImageUrl(url: string, width = 400): string {
    if (!url) return '';
    return `${url}?w=${width}&fit=clip&auto=format&q=80`;
  }

  imagenesCargadas = signal<Set<string>>(new Set());

  marcarCargada(key: string) {
    this.imagenesCargadas.update(set => {
      const nuevo = new Set(set);
      nuevo.add(key);
      return nuevo;
    });
  }
}