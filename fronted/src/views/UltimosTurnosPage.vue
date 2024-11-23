<template>
  <div class="ultimos-turnos-page">
    <AppNavbar />

    <h1>Turnos</h1>
    
    <div class="content">
      <table class="turnos-table">
        <thead>
          <tr>
            <th>Estudio</th>
            <th>Nombre</th>
            <th>Cédula</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(turno, index) in turnos" :key="index">
            <td>{{ turno.estudio }}</td>
            <td>{{ turno.nombre }}</td>
            <td>{{ turno.cedula }}</td>
            <td>
              <button @click="mandarAEstudio(turno.estudio)">Mandar a Estudio</button>
              <button @click="mandarARecepcion(turno)">Recepción</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <BottomBar />
  </div>
</template>

<script lang="ts">
import { ref, onMounted } from 'vue';
import BottomBar from '../components/BottomBar.vue';
import AppNavbar from '../components/AppNavbar.vue';

export default {
  name: "UltimosTurnosPage",
  components: {
    BottomBar,
    AppNavbar,
  },
  setup(_, { root }) {
    const turnos = ref<Array<{ estudio: string, nombre: string, cedula: string }>>([]);

    const obtenerUltimosTurnos = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/turnos/ultimos-turnos');
        const data = await response.json();
        turnos.value = data.turnos;
      } catch (error) {
        console.error("Error al obtener los últimos turnos:", error);
      }
    };

    const mandarAEstudio = (estudio: string) => {
      root.$router.push({ name: 'TableComponent', params: { studyName: estudio } });
    };

    const mandarARecepcion = (turno: { estudio: string, nombre: string, cedula: string }) => {
      alert(`Mandando a Recepción el turno de ${turno.nombre} (${turno.cedula})`);
    };

    onMounted(() => {
      obtenerUltimosTurnos();
    });

    return { turnos, mandarAEstudio, mandarARecepcion };
  },
};
</script>


<style scoped>
.ultimos-turnos-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0;
  margin: 0;
}

h1 {
  font-size: 24px;
  color: #333;
  padding: 20px;
  text-align: center;
}

.content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.turnos-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #4CAF50; /* Color verde uniforme para toda la tabla */
}

.turnos-table th, .turnos-table td {
  padding: 12px;
  text-align: left;
  font-size: 16px;
  color: white; /* Texto blanco para contraste */
  border-bottom: 1px solid #ddd;
}

.turnos-table th {
  font-weight: bold;
  background-color: #4CAF50; /* Fondo verde para las cabeceras también */
}

.turnos-table tbody tr:nth-child(even) {
  background-color: #4CAF50; /* Mismo color verde para todas las filas */
}

.turnos-table button {
  background-color: #fff;
  color: #4CAF50;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
}

.turnos-table button:hover {
  background-color: #f1f1f1; /* Cambiar el color de fondo en hover */
}

/* Estilo del BottomBar */
.bottom-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #4CAF50;
  padding: 10px 0;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
</style>
