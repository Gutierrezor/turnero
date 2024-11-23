const db = require('../config/database'); 

const registerUser = (name, email, password) => {
  const query = 'INSERT INTO usuarios (nombre, email, contrasea) VALUES (?, ?, ?)';
  db.query(query, [name, email, password], (err, results) => {
    if (err) throw err;
    console.log('Usuario registrado:', results);
  });
};

module.exports = { registerUser };
