import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatosOngService } from '../../services/datos-ong.services';

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actividades.html',
  styleUrl: './actividades.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Actividades {
  private datosOngService = inject(DatosOngService);
  datosOng = toSignal(this.datosOngService.datosOng$, {initialValue: null}) 
}