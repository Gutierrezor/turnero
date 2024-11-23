import api from './api';

export const getTurnos = async () => {
  try {
    const response = await api.get('/turnos');
    return response.data;
  } catch (error) {
    console.error('Error obteniendo los turnos:', error);
  }
};
