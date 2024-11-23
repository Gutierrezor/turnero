const express = require('express');
const router = express.Router();
const db = require('../config/database'); 
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
