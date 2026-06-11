import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavegacionService } from '../../navegacion';
import { DatosOngService } from '../../services/datos-ong.services';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  public navService = inject(NavegacionService);
  private datosOngService = inject(DatosOngService);
  datosOng = toSignal(this.datosOngService.datosOng$, { initialValue: null });
}