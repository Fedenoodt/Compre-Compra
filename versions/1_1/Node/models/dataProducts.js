const mongoose = require('mongoose');

// Definir un esquema de datos
const productoSchema = new mongoose.Schema({
  nombre: {
    type: String
  },
  descripcion: {
    type: String
  },
  tipoMoneda: {
    type: String
  },
  precio: {
    type: String
  }
});

// Crear el modelo de Producto
const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
