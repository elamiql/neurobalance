import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { from } from 'rxjs';
import { createClient } from '@sanity/client';
import { DatosOng } from '../home/models/datos-ong.interface';
import { environment } from '../../../environments/environment';

const sanity = createClient({
  projectId: environment.sanityProjectId,
  dataset: environment.sanityDataset,
  useCdn: true,
  apiVersion: '2024-01-01',
  token: environment.sanityToken
});

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nosotros.html',
  styleUrl: './nosotros.css',
})

export class Nosotros{
  datosOng = toSignal(
    from(sanity.fetch<DatosOng>(`*[_type == "datosOng"][0]`)),
    { initialValue: null }
  );
}