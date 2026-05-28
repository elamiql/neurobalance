import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { from } from 'rxjs';
import { createClient } from '@sanity/client';
import { DatosOng } from '../../pages/home/models/datos-ong.interface';
import { environment } from '../../../environments/environment';

const sanity = createClient({
  projectId: environment.sanityProjectId,
  dataset: environment.sanityDataset,
  useCdn: true,
  apiVersion: '2024-01-01',
  token: environment.sanityToken
});

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {
  datosOng = toSignal(
    from(sanity.fetch<DatosOng>(`*[_type == "datosOng"][0]`)),
    { initialValue: null }
  );
}