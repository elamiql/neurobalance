import { Component, OnInit, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {
  private http = inject(HttpClient);
  datosOng = signal<any>(null);

  ngOnInit(): void {
    this.http.get('/datos-ong.json').subscribe(res => this.datosOng.set(res));
  }
}