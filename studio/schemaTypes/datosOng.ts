import { defineType, defineField } from 'sanity'

export const datosOngSchema = defineType({
  name: 'datosOng',
  title: 'Datos ONG',
  type: 'document',
  fields: [
    defineField({ name: 'descripcion', title: 'Descripción', type: 'text' }),
    defineField({ name: 'descripcion2', title: 'Descripción 2', type: 'text' }),
    defineField({ name: 'mision', title: 'Misión', type: 'text' }),
    defineField({ name: 'vision', title: 'Visión', type: 'text' }),
    defineField({ name: 'taglineFooter', title: 'Tagline Footer', type: 'string' }),
    defineField({
      name: 'actividades',
      title: 'Actividades',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'objetivos',
      title: 'Objetivos',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'valores',
      title: 'Valores',
      type: 'array',
      of: [{ type: 'string' }]
    }),
    defineField({
      name: 'contacto',
      title: 'Contacto',
      type: 'object',
      fields: [
        defineField({ name: 'direccion', title: 'Dirección', type: 'string' }),
        defineField({ name: 'email', title: 'Email', type: 'string' }),
        defineField({ name: 'telefono', title: 'Teléfono', type: 'string' }),
        defineField({ name: 'telefonoDisplay', title: 'Teléfono Display', type: 'string' }),
      ]
    }),
    defineField({
      name: 'redes',
      title: 'Redes Sociales',
      type: 'object',
      fields: [
        defineField({ name: 'instagram', title: 'Instagram', type: 'url' }),
        defineField({ name: 'facebook', title: 'Facebook', type: 'url' }),
        defineField({ name: 'tiktok', title: 'TikTok', type: 'url' }),
      ]
    }),
    defineField({
      name: 'servicios',
      title: 'Servicios',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'categoria', title: 'Categoría', type: 'string' }),
          defineField({ name: 'icono', title: 'Ícono', type: 'string' }),
          defineField({
            name: 'items',
            title: 'Items',
            type: 'array',
            of: [{ type: 'string' }]
          }),
        ]
      }]
    }),

    defineField({
      name: 'profesionales',
      title: 'Profesionales',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'nombre', title: 'Nombre', type: 'string' }),
          defineField({ name: 'rol', title: 'Rol', type: 'string' }),
          defineField({ name: 'especialidad', title: 'Especialidad', type: 'string' }),
          defineField({ name: 'bio', title: 'Biografía', type: 'text' }),
          defineField({ name: 'email', title: 'Email', type: 'string' }),
          defineField({
            name: 'foto',
            title: 'Foto',
            type: 'image',
            options: { hotspot: true }
          }),
        ]
      }]
    }),
  ]
})