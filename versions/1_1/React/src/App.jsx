import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import DataFetcher from './Components/DataFetcher';

function App() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // Realizar la solicitud a la API para obtener los productos
    fetch('http://localhost:5000/api/productos')
      .then(response => response.json())
//      .then(data => {console.log(data);})
      .then(data => setProductos(data)) // Almacenar los productos en el estado
      .catch(error => console.log('Error al obtener productos:', error));
      console.log(productos)
  }, []);

  return (
    <div>
      <h1>Productos</h1>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>{producto.tipoMoneda} {producto.precio}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
