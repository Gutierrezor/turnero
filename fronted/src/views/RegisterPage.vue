<template>
  <div class="register-container">
    <h1>Crear Cuenta</h1>
    <form @submit.prevent="crearUsuario">
      <div class="form-group">
        <label for="name">Nombre Completo:</label>
        <input
          type="text"
          id="name"
          v-model="name"
          placeholder="Ingresa tu nombre completo"
          required
        />
      </div>
      <div class="form-group">
        <label for="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Ingresa tu correo"
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
      <button type="submit">Crear Cuenta</button>
    </form>

    <div class="login-link">
      <p>Ya tienes cuenta? <router-link to="/login">Iniciar sesión</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async crearUsuario() {
      try {
        const response = await axios.post('http://localhost:5000/api/register', {
          nombre: this.name,  
          email: this.email,
          contrasea: this.password          });

        console.log('Respuesta del servidor:', response);
        if (response.status === 201) {
          this.$router.push('/login');         }
      } catch (error) {
        console.error('Error al crear el usuario:', error);
        alert('Hubo un error al crear la cuenta');
      }
    }
  }
};
</script>


<style scoped>
.register-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}

.form-group {
  margin-bottom: 15px;
}

input {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.login-link {
  text-align: center;
  margin-top: 20px;
}
</style>
