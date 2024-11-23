<template>
    <div class="study-container">
      <app-navbar></app-navbar>
  
      <div class="button-container">
        <h1>Selecciona un Estudio</h1>
  
        <div class="button-group">
          <button @click="goToStudy('Radiografía')">Radiografía</button>
          <button @click="goToStudy('Osteodensitometría')">Osteodensitometría</button>
        </div>
  
        <div class="button-group">
          <button @click="goToStudy('Mamografía')">Mamografía</button>
          <button @click="goToStudy('Ecografía')">Ecografía</button>
        </div>
  
        <div class="button-group">
          <button @click="goToReception">Recepción</button>
        </div>
      </div>
  
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
  methods: {
    goToStudy(study) {
      this.$router.push({ name: 'TableComponent', params: { studyName: study } });
    },
    goToReception() {
      this.$router.push('/reception');
    },
  },
};
</script>

<style scoped>
/* Contenedor principal que ocupa toda la pantalla */
.study-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Asegura que los elementos se distribuyan */
  align-items: center;
  height: 100vh; /* Altura completa de la pantalla */
  margin: 0; /* Sin márgenes */
  padding: 0; /* Sin relleno */
  box-sizing: border-box;
  background-color: #f9f9f9; /* Fondo claro */
}

/* Contenedor de los botones */
.button-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%; /* Ocupa todo el ancho */
  flex-grow: 1; /* Ocupa el espacio restante entre la barra superior e inferior */
}

/* Título */
h1 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: bold;
  color: #333;
}

/* Grupos de botones */
.button-group {
  display: flex;
  justify-content: space-around; /* Botones distribuidos uniformemente */
  width: 80%; /* Ancho del grupo */
  max-width: 1200px; /* Limita el ancho máximo */
  margin: 20px 0;
}

/* Botones */
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 20px 30px; /* Botones grandes para llenar el espacio */
  flex: 1; /* Los botones ocupan el mismo ancho */
  margin: 0 10px; /* Espaciado entre botones */
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.2s;
}

/* Efecto al pasar el mouse */
button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

/* Efecto al hacer clic */
button:active {
  transform: translateY(0);
}

/* Barra inferior */
bottom-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #007bff;
  padding: 15px 0;
  text-align: center;
  color: white;
  font-weight: bold;
}

/* Barra superior */
app-navbar {
  width: 100%;
  background-color: #333;
  color: white;
}
</style>
