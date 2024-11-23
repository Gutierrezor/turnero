<template>
  <div class="login-container">
    <app-navbar></app-navbar> 
    
    <div class="form-container">
      <h1>Iniciar sesión</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>

      <div class="register-link">
        <p>¿No tienes cuenta? <router-link to="/register">Crear cuenta</router-link></p>
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
    BottomBar
  },
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      this.$router.push('/study-page'); 
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  height: 100vh; 
}

.form-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

form {
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 20px;
}

button {
  background-color: #007bff;
  color: white;
  padding: 10px;
  border: none;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

.register-link {
  margin-top: 20px;
}
</style>
