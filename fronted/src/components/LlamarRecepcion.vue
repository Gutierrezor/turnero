<template>
    <button @click="handleClick">Llamar a Recepción</button>
  </template>
  
  <script lang="ts">
  export default {
    name: "LlamarRecepcion",
    methods: {
      handleClick() {
        this.$emit('action-clicked', 'llamarRecepcion');
      }
    }
  };
  </script>
  
  <style scoped>
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
  