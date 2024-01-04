// Importa las bibliotecas necesarias
import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

// Define el componente Page2
const Page2 = () => {
  return (
    <Layout>
      {
        <main>
          <h1>This is Page 2</h1>
          <Link to="/">Go back to the homepage</Link>
        </main>
      }
    </Layout>
  )
}

// Exporta el componente Page2
export default Page2