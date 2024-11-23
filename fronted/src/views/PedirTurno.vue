<template>
  <div class="page-container">

    <AppNavbar />
    

    <div class="main-content">
      <h1>Crear Turno</h1>
      <form @submit.prevent="crearTurno" class="turno-form">
        <div class="form-group">
          <label for="nombre" class="form-label">Nombre:</label>
          <input 
            type="text" 
            id="nombre" 
            v-model="turno.nombre" 
            class="form-input" 
            placeholder="Ingresa tu nombre" 
            required 
          />
        </div>
        <div class="form-group">
          <label for="cedula" class="form-label">Cédula:</label>
          <input 
            type="text" 
            id="cedula" 
            v-model="turno.cedula" 
            class="form-input" 
            placeholder="Ingresa tu cédula" 
            required 
          />
        </div>
        <div class="form-group">
          <label for="estudio" class="form-label">Estudio:</label>
          <select 
            id="estudio" 
            v-model="turno.estudio" 
            class="form-select" 
            required
          >
            <option value="">Selecciona un estudio</option>
            <option value="Radiografía">Radiografía</option>
            <option value="Osteodensitometría">Osteodensitometría</option>
            <option value="Mamografía">Mamografía</option>
            <option value="Ecografía">Ecografía</option>
          </select>
        </div>
        <button type="submit" class="submit-btn">Crear Turno</button>
      </form>

      <div v-if="mensajeExito" class="toast-notification">
        <p>Turno creado con éxito. ID: {{ turnoId }}</p>
      </div>
    </div>

    <BottomBar />
  </div>
</template>

<script>
import AppNavbar from '../components/AppNavbar.vue';  // Barra superior
import BottomBar from '../components/BottomBar.vue';  // Barra inferior
import axios from 'axios';

export default {
  components: {
    AppNavbar,
    BottomBar
  },
  data() {
    return {
      turno: {
        nombre: '',
        cedula: '',
        estudio: '',
      },
      mensajeExito: false,
      turnoId: null,
    };
  },
  methods: {
    async crearTurno() {
      if (this.turno.nombre && this.turno.cedula && this.turno.estudio) {
        try {
          console.log('Datos a enviar:', this.turno); // Ver los datos enviados
          const response = await axios.post('http://localhost:5000/api/turnos/crear', this.turno);
          console.log('Respuesta del servidor:', response); 
          
          if (response.status === 201) {
            this.mensajeExito = true;  
            this.turnoId = response.data.turnoId; 
            this.turno = { nombre: '', cedula: '', estudio: '' }; 
            setTimeout(() => {
              this.mensajeExito = false; 
            }, 3000);
          }
        } catch (error) {
          console.error('Error al crear el turno:', error);
          alert('Hubo un error al crear el turno');
        }
      } else {
        alert('Por favor, complete todos los campos.');
      }
    },
  },
};
</script>

<style scoped>

.page-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f4f4f4;
}


.main-content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  background-color: #fff;
}


.turno-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}


.form-label {
  font-size: 16px;
  margin-bottom: 8px;
  color: #333;
}


.form-input, .form-select {
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  font-size: 16px;
  color: #333; 
}


.form-input:focus, .form-select:focus {
  border-color: #4CAF50;
  background-color: #fff;
  outline: none;
}


.submit-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
}

.submit-btn:hover {
  background-color: #45a049;
}


.BottomBar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #4CAF50;
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 14px;
}


.toast-notification {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4CAF50;
  color: white;
  padding: 15px 30px;
  border-radius: 25px;
  font-size: 16px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  animation: slideIn 0.5s ease-out, fadeOut 2s 3s forwards;
  z-index: 1000;
}

@keyframes slideIn {
  from {
    top: -50px;
    opacity: 0;
  }
  to {
    top: 20px;
    opacity: 1;
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
