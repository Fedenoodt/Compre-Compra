const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productsController');

// Ruta para obtener todos los productos
router.get('/productos', productoController.obtenerProductos);

module.exports = router;
