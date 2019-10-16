import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Portfolio extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Portfolio" />
        <h1>Portfolio</h1>
        <p>
          ポートフォリオは 
          <a href="https://www.resume.id/tk_infra" 
             target="_blank" 
             rel="noopener noreferrer"> 
          RESUME </a>
          にのせる予定です。
        </p>
      </Layout>
    )
  }
}

export default Portfolio

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
