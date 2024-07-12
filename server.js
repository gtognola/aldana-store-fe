// server.js
const express = require('express');
const app = express();
require('dotenv').config(); 
const port = process.env.APP_PORT || 3000;;
// Sirve archivos estáticos desde la carpeta "public"
app.use(express.static('public'));



// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
