// backend/app.js
const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

// Importar las rutas de productos
const productsRoutes = require('./routes/productsRoutes');

// Configuración de la URI de conexión con MongoDB
const uri = 'mongodb://localhost:27017/compre_compra'; // Reemplaza con tu URL de conexión

// Conectando a MongoDB con mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error al conectar con MongoDB:', error));


app.use(cors());  // Permitir solicitudes desde otros orígenes
app.use(express.json());  // Para manejar JSON en el cuerpo de las solicitudes

// Usar las rutas de productos
app.use('/api', productsRoutes); // Las rutas de productos estarán disponibles bajo /api

// Datos simulados
//const data = [
//  { id: 1, name: "Juan", age: 30 },
//  { id: 2, name: "Ana", age: 25 },
//  { id: 3, name: "Carlos", age: 40 }
//];

// Ruta para obtener datos
app.get('/api/productos', (req, res) => {
  res.json(data);  // Devolver los datos simulados en formato JSON
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
