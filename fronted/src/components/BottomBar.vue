<template>
  <div class="bottom-bar">
    <p>{{ hora }}</p>
    <p>Hospital Corhuila</p>
  </div>
</template>

<script lang="ts">
export default {
  name: "BottomBar",
  data() {
    return {
      hora: "", 
    };
  },
  mounted() {
setInterval(this.actualizarHora, 1000);
  },
  methods: {
    actualizarHora() {
      const date = new Date();
      this.hora = date.toLocaleTimeString();     }
  }
};
</script>

