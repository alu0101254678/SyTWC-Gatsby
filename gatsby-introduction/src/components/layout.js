// Importa las bibliotecas necesarias
import * as React from "react"

// Define el componente Layout que incluye el encabezado, el contenido principal y el pie de página
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <h1>Encabezado de la página</h1>
      </header>
      <main>{children}</main>
      <footer>
        <h2>Pie de página</h2>
      </footer>
    </div>
  )
}

// Exporta el componente Layout
export default Layout