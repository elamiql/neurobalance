export interface Contacto {
  direccion: string;
  email: string;
  telefono: string;
  telefonoDisplay: string;
}

export interface Redes {
  instagram: string;
  facebook: string;
  tiktok: string;
}

export interface Servicio {
  categoria: string;
  icono: string;
  items: string[];
}

export interface DatosOng {
  descripcion: string;
  descripcion2: string;
  mision: string;
  vision: string;
  actividades: string[];
  objetivos: string[];
  valores: string[];
  taglineFooter: string;
  contacto: Contacto;
  redes: Redes;
  servicios: Servicio[];
}