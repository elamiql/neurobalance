import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatosOngService } from '../../services/datos-ong.services';

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
  
  getSanityImageUrl(url: string, width = 400): string {
    if (!url) return '';
    return `${url}?w=${width}&fit=clip&auto=format&q=80`;
  }
}