import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { createClient } from '@sanity/client';
import { NavegacionService } from '../../navegacion';
import { DatosOng } from './models/datos-ong.interface';
import { environment } from '../../../environments/environment';

const sanity = createClient({
  projectId: environment.sanityProjectId,
  dataset: environment.sanityDataset,
  useCdn: true,
  apiVersion: '2024-01-01',
  token: environment.sanityToken
});

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

  datosOng = toSignal(
    from(sanity.fetch<DatosOng>(`*[_type == "datosOng"][0]`)),
    { initialValue: null }
  );
}