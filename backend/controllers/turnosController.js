const pool = require('../config/database');

exports.crearTurno = (req, res) => {
    const { nombre, cedula, estudio } = req.body;

    if (!nombre || !cedula || !estudio) {
        return res.status(400).json({ error: 'Todos los campos son requeridos' });
    }

    const query = 'INSERT INTO turnos (nombre, cedula, estudio) VALUES (?, ?, ?)';
    pool.query(query, [nombre, cedula, estudio], (error, results) => {
        if (error) {
            console.error('Error al crear el turno:', error);
            return res.status(500).json({ error: 'Error al crear el turno' });
        }
        res.status(201).json({ message: 'Turno creado exitosamente', turnoId: results.insertId });
    });
};
