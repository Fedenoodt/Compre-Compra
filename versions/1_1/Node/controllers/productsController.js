const Producto = require('../models/dataProducts'); // Asegúrate de que la ruta al modelo sea correcta

// Controlador para obtener todos los productos
exports.obtenerProductos = async (req, res) => {
  try {
    const productos = await Producto.find(); // Obtiene todos los productos
    if (productos.length === 0) {
      // Si no hay productos, enviar un arreglo vacío
      return res.json([]);
    }
    res.json(productos); // Devuelve los productos en formato JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error al obtener los productos' }); // Asegúrate de que el mensaje de error también sea JSON
  }
};
