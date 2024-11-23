<template>
  <div>
    <h1>Turnos</h1>
    <TurnoCard v-for="turno in turnos" :key="turno.id" :turno="turno" />
  </div>
</template>

<script>
import TurnoCard from '@/components/TurnoCard.vue';

export default {
  name: 'TurnosPage',
  components: { TurnoCard },
  data() {
    return {
      turnos: [
        { id: 1, nombre: 'Turno 1', detalles: 'Detalles del turno 1' },
        { id: 2, nombre: 'Turno 2', detalles: 'Detalles del turno 2' },
      ],
    };
  },
};
</script>
