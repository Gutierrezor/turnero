<template>
  <div class="navbar">
    <button @click="toggleMenu" class="menu-button">Menú</button>
    
    <div v-if="menuVisible" class="dropdown-menu">
      <button @click="goToInicio" class="dropdown-item">Crear Turno</button>
      <button @click="goToLogin" class="dropdown-item">Iniciar Sesión</button>
      <button @click="goToUltimosTurnos" class="dropdown-item">Ver Últimos Turnos</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "AppNavbar",
  data() {
    return {
      menuVisible: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    goToInicio() {
      this.$router.push('/home');
    },
    goToLogin() {
      this.$router.push('/login');
    },
    goToUltimosTurnos() {
      this.$router.push('/ultimos-turnos');
    }
  }
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  position: relative;
}

.menu-button {
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
}

.menu-button:hover {
  background-color: #45a049;
}

.dropdown-menu {
  position: absolute;
  top: 50px;
  right: 0;
  background-color: #333;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.dropdown-item {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  text-align: left;
  font-size: 16px;
}

.dropdown-item:hover {
  background-color: #0056b3;
}

@media (max-width: 600px) {
  .menu-button {
    font-size: 14px;
    padding: 8px;
  }

  .dropdown-item {
    font-size: 14px;
    padding: 8px;
  }
}
</style>
