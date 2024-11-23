const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Aquí irán los últimos turnos' });
});

module.exports = router;
