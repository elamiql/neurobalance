import { Component } from '@angular/core';
import { NavegacionService } from '../../navegacion';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(public navService: NavegacionService) {}
}