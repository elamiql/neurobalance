import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { createClient } from '@sanity/client';
import { DatosOng } from '../pages/home/models/datos-ong.interface';
import { environment } from '../../environments/environment';

const sanity = createClient({
  projectId: environment.sanityProjectId,
  dataset: environment.sanityDataset,
  useCdn: true,
  apiVersion: '2024-01-01',
  token: environment.sanityToken
});

@Injectable({ providedIn: 'root' })
export class DatosOngService {
  readonly datosOng$ = from(
    sanity.fetch<DatosOng>(`
      *[_type == "datosOng"][0]{
        ...,
        profesionales[]{
          ...,
          "foto": foto.asset->url
        }
      }
    `)
  ).pipe(shareReplay(1));
}