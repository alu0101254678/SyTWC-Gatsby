// Importa las bibliotecas necesarias
import React from "react"
import { Link } from "gatsby"

// Define el componente Layout que incluye la barra de navegación y el contenido principal
const Layout = ({ children }) => (
  <div>
    <header>
      <nav>
        {/* Define los enlaces de la barra de navegación */}
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav>
    </header>
    {/* Define la zona de contenido principal */}
    <main>{children}</main>
  </div>
)

// Exporta el componente Layout
export default Layout