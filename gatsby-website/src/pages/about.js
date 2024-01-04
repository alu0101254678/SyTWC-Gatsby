// Importa las bibliotecas necesarias
import React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

// Define el componente AboutPage
const AboutPage = () => (
  <Layout>
    <h1>About Page</h1>
    <p>Author: Yago Pérez Molanes</p>
    <p>Date: {new Date().toLocaleDateString()}</p>
    {/* Utiliza StaticImage para mostrar una imagen estática */}
    <StaticImage src="../images/my-image.jpg" alt="Descripción de la imagen" />
  </Layout>
)

// Exporta el componente AboutPage
export default AboutPage