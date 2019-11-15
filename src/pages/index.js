import React from "react"
import { Link } from "gatsby"
import TransitionLink from "gatsby-plugin-transition-link"
import { spacing } from "primitivo-svg"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import GoToPage from "../components/GoToPage"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <GoToPage/>
  </Layout>
)

export default IndexPage
