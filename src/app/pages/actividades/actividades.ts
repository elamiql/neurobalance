import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-actividades',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actividades.html',
  styleUrl: './actividades.css',
})
export class Actividades implements OnInit {
  private http = inject(HttpClient);
  datosOng = signal<any>(null);

  ngOnInit(): void {
    this.http.get('/datos-ong.json').subscribe(res => this.datosOng.set(res));
  }
}