import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/data')  // Conectar con Express
      .then(response => {
        if (!response.ok) {
          throw new Error('No se pudo obtener los datos');
        }
        return response.json();  // Convertir la respuesta en JSON
      })
      .then(data => {
        console.log('Datos recibidos:', data);  // Verifica los datos en la consola
        setData(data);  // Actualiza el estado con los datos
        setLoading(false);  // Cambia el estado de carga a false
      })
      .catch(error => {
        console.error('Error:', error);
        setError('Error al cargar los datos');
        setLoading(false);
      });
  }, []);  // Esto solo se ejecuta una vez cuando el componente se monta

  if (loading) return <p>Cargando datos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Datos desde la API:</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name} - {item.age} años</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetcher;
