// layout.js
import * as React from "react"

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

export default Layout