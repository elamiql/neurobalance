import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavegacionService } from '../../navegacion';
import { DatosOng } from './models/datos-ong.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {
  private http = inject(HttpClient);
  public navService = inject(NavegacionService);

  datosOng = toSignal(
    this.http.get<DatosOng>('/datos-ong.json'),
    { initialValue: null }
  );
}