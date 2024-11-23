const express = require('express');
const router = express.Router();
const db = require('../config/database'); 

router.post('api/register', (req, res) => {
  const { nombre, email, contrasea } = req.body; 

  if (!nombre || !email || !contrasea) {  
    return res.status(400).json({ message: 'Faltan datos para crear el usuario' });
  }


  const query = 'INSERT INTO usuarios (nombre, email, contrasea) VALUES (?, ?, ?)';  db.query(query, [nombre, email, contrasea], (err, results) => {
    if (err) {
      console.error('Error al registrar el usuario:', err);
      return res.status(500).json({ message: 'Error al registrar el usuario', error: err });
    }
    res.status(201).json({ message: 'Usuario creado correctamente', user: { nombre, email } });
  });
});



router.get('/ultimos-turnos', (req, res) => {
  const query = 'SELECT * FROM turnos ORDER BY id DESC LIMIT 4'; 
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener los últimos turnos:', err);
      return res.status(500).json({ message: 'Error al obtener los últimos turnos', error: err });
    }
    res.status(200).json({ turnos: results });
  });
});

router.post('/crear', (req, res) => {
  const { nombre, cedula, estudio } = req.body;

  if (!nombre || !cedula || !estudio) {
    return res.status(400).json({ message: 'Faltan datos para crear el turno' });
  }

  const query = 'INSERT INTO turnos (nombre, cedula, estudio) VALUES (?, ?, ?)';
  db.query(query, [nombre, cedula, estudio], (err, results) => {
    if (err) {
      console.error('Error al crear el turno:', err);
      return res.status(500).json({ message: 'Error al crear el turno', error: err });
    }

    res.status(201).json({ message: 'Turno creado correctamente', turno: { nombre, cedula, estudio } });
  });
});

module.exports = router;
