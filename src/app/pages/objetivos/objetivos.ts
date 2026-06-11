import { Component, inject, ChangeDetectionStrategy, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatosOngService } from '../../services/datos-ong.services';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-objetivos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './objetivos.html',
  styleUrl: './objetivos.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Objetivos {
  private datosOngService = inject(DatosOngService);
  datosOng = toSignal(this.datosOngService.datosOng$, { initialValue: null });

}