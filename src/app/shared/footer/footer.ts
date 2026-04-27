import { Component, OnInit, inject, signal } from '@angular/core';
import { NavegacionService } from '../../navegacion';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {
  private http = inject(HttpClient);
  public navService = inject(NavegacionService);

  datosOng = signal<any>(null);

  ngOnInit(): void {
    this.http.get('/datos-ong.json').subscribe(res => this.datosOng.set(res));
  }

  navegar(seccion: string) {
    this.navService.cambiarSeccion(seccion);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}