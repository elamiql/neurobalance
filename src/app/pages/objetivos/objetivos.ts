import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-objetivos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './objetivos.html',
  styleUrl: './objetivos.css',
})
export class Objetivos implements OnInit {
  private http = inject(HttpClient);
  datosOng = signal<any>(null);

  ngOnInit(): void {
    this.http.get('/datos-ong.json').subscribe(res => this.datosOng.set(res));
  }
}