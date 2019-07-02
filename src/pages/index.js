import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Homepage" />
    {/* <h1 style={{ fontWeight: `900` }}>
      Designer who likes to code, create experienes that makes people’s lives easier.
    </h1> */}

    <p>
      <Link to="/about/">About</Link>
    </p>
  </Layout>
)

export default IndexPage
