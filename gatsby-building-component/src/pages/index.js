// src/pages/index.js
import React, { useEffect, useState } from "react"
import Building from "../components/building"

// Este es el componente principal de la página de inicio
export default function Home() {
  // Inicializamos el estado de los datos con un array vacío
  const [data, setData] = useState([]);

  // Usamos useEffect para hacer la llamada a la API cuando el componente se monta
  useEffect(() => {
    // Hacemos la llamada a la API
    fetch('https://demo4085396.mockable.io')
      .then(response => response.json()) // Convertimos la respuesta a JSON
      .then(data => setData(data.bienes)); // Actualizamos el estado con los datos recibidos
  }, []);

  return (
    // Renderizamos un contenedor con las tarjetas de los edificios
    <div id="container" style={{ 
      display: 'flex', 
      flexWrap: 'wrap', 
      justifyContent: 'center' 
    }}>
      {data.map(bien => (
        /* Para cada edificio en los datos, renderizamos un componente Building */
        <Building bien={bien} key={bien.nombre} />
      ))}
    </div>
  )
}

/* En el código, se hace una llamada fetch en el componente Home y
se guardan los datos obtenidos en el estado data. Luego, se mapea 
sobre data para renderizar un componente Building para cada objeto 
en data. Cada objeto se pasa al componente Building como la prop bien.*/