<template>
  <div class="table-container">
    <app-navbar></app-navbar>

    <h1>Turnos para {{ studyName }}</h1>
    
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Cédula</th>
          <th>Recepción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(turno, index) in filteredTurnos" :key="index">
          <td>{{ turno.nombre }}</td>
          <td>{{ turno.cedula }}</td>
          <td>{{ turno.recepcion }}</td>
        </tr>
      </tbody>
    </table>

    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import AppNavbar from '@/components/AppNavbar.vue';
import BottomBar from '@/components/BottomBar.vue';

export default {
  components: {
    AppNavbar,
    BottomBar,
  },
  data() {
    return {
      turnos: [],
    };
  },
  computed: {
    studyName() {
      return this.$route.params.studyName || 'Sin Estudio';
    },
    filteredTurnos() {
      return this.turnos.filter(turno => turno.estudio === this.studyName);
    },
  },
  methods: {
    async fetchTurnos() {
      try {
        const response = await fetch(`http://localhost:5000/api/turnos?estudio=${this.studyName}`);
        const data = await response.json();
        this.turnos = data.turnos;
      } catch (error) {
        console.error("Error al obtener los turnos:", error);
      }
    },
  },
  created() {
    this.fetchTurnos();
  },
};
</script>


<style scoped>
.table-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

table {
  width: 80%;
  border-collapse: collapse;
}

th, td {
  padding: 12px;
  text-align: left;
  border: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

bottom-bar {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
