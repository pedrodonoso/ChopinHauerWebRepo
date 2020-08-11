export default function() {
    return [
      {
        subtitle: 'Equipos',
        title: 'Todos',
        htmlBefore: '<i class="material-icons">view_module</i>',
        to: '/teams-list'
      },
      {
        subtitle: 'Equipos',
        title: 'Agregar',
        htmlBefore: '<i class="material-icons">note_add</i>',
        to: '/teams-form'
      },
      {
        subtitle: 'Personal de Servicio',
        title: 'Todos',
        htmlBefore: '<i class="material-icons">view_module</i>',
        to: '/all-pservice'
      },
      {
        subtitle: 'Personal de Servicio',
        title: 'Agregar',
        htmlBefore: '<i class="material-icons">note_add</i>',
        to: '/add-new-pservice'
      },
    ];
  }
