const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const registerRoutes = require('./routes/register');
const turnosRoutes = require('./routes/turnos');


const app = express();
const PORT = 5000;


app.use(cors()); 
app.use(bodyParser.json());


app.use('/api/register', registerRoutes); 
app.use('/api/turnos', turnosRoutes);    

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
