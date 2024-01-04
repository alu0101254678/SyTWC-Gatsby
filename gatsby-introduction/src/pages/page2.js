// page2.js
import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

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

export default Page2