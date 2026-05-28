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
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  menuAbierto = false;
  subMenuAbierto = false;

  datosOng = toSignal(
    from(sanity.fetch<DatosOng>(`*[_type == "datosOng"][0]`)),
    { initialValue: null }
  );

  toggleMenu() {
    this.menuAbierto = !this.menuAbierto;
  }

  toggleSubMenu(event: Event) {
    event.stopPropagation();
    this.subMenuAbierto = !this.subMenuAbierto;
  }

  cerrarMenus() {
    this.menuAbierto = false;
    this.subMenuAbierto = false;
  }
}