<template>
  <div class="reception-container">
    <app-navbar></app-navbar>

    <h1>Recepción - Todos los Estudios</h1>

    <div class="studies-list">
      <div class="study-group" v-for="study in uniqueStudies" :key="study">
        <h2>{{ study }}</h2>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Estudio</th>
              <th>Recepción</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="turno in filteredTurnos(study)" :key="turno.id">
              <td>{{ turno.nombre }}</td>
              <td>{{ turno.estudio }}</td>
              <td>{{ turno.recepcion }}</td>
              <td>
                <action-button :onClick="() => handleAction(turno.id)">
                  Realizar Acción
                </action-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <bottom-bar></bottom-bar>
  </div>
</template>

<scrip>
import AppNavbar from '@/components/AppNavbar.vue';
import BottomBar from '@/components/BottomBar.vue';
import ActionButton from '@/components/ActionButton.vue';

export default {
  components: {
    AppNavbar,
    BottomBar,
    ActionButton
  },
  data() {
    return {
      turnos: [
        { id: 1, nombre: 'Juan Pérez', estudio: 'Radiografía', recepcion: '10:00 AM' },
        { id: 2, nombre: 'Ana Gómez', estudio: 'Mamografía', recepcion: '10:30 AM' },
        { id: 3, nombre: 'Carlos López', estudio: 'Osteodensitometría', recepcion: '11:00 AM' },
        { id: 4, nombre: 'Laura Martínez', estudio: 'Ecografía', recepcion: '11:30 AM' },
        { id: 5, nombre: 'Pedro Ruiz', estudio: 'Radiografía', recepcion: '12:00 PM' },
        { id: 6, nombre: 'María Fernández', estudio: 'Mamografía', recepcion: '12:30 PM' }
      ]
    };
  },
  computed: {
    uniqueStudies() {
      return [...new Set(this.turnos.map(turno => turno.estudio))];
    }
  },
  methods: {
    filteredTurnos(study) {
      return this.turnos.filter(turno => turno.estudio === study);
    },
    handleAction(id) {
      alert(`Acción realizada para el turno con ID: ${id}`);
      // Aquí puedes agregar la lógica que desees para este botón
    }
  }
};
</script>

<style>


  
  <style scoped>
  .action-buttons {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 20px;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  