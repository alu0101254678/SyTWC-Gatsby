// Importa las bibliotecas necesarias
import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

// Define el componente Page3
const Page3 = () => {
  return (
    <Layout>
      {
        <main>
          <h1>This is Page 3</h1>
          <Link to="/">Go back to the homepage</Link>
        </main>
      }
    </Layout>
  )
}

// Exporta el componente Page3
export default Page3