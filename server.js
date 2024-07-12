// server.js
const express = require('express');
const app = express();
const port = 3000;

// Sirve archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

// Define una ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
