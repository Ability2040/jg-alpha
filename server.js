// Importar Express
const express = require('express');
const app = express();
const PORT = 3000;

// Servir los archivos estáticos que están en "public"
app.use(express.static('public'));

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
