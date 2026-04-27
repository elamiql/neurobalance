import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Actividades } from './pages/actividades/actividades';
import { Objetivos } from './pages/objetivos/objetivos';
import { Nosotros } from './pages/nosotros/nosotros';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'actividades', component: Actividades },
  { path: 'objetivos', component: Objetivos },
  { path: 'nosotros', component: Nosotros },
  { path: '**', redirectTo: '' }
];