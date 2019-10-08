import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class Services extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Services" />
        <h1>Services</h1>
        <p>
          Excepteur mollit ullamco aliquip culpa nostrud do exercitation et
          nostrud ea. Aliquip ut labore duis ut consectetur velit voluptate
          laborum. Quis non amet enim consequat culpa qui tempor sit sit mollit.
          Pariatur do aliqua eu minim deserunt ut duis. Non non ipsum
          exercitation do incididunt duis nostrud ea duis. Occaecat nostrud
          proident sint elit anim laboris velit nisi in. Sunt deserunt nulla
          aliqua minim. Voluptate non sint reprehenderit consectetur dolor.
          Magna labore irure sint aliquip. Est ex aute adipisicing qui sint
          incididunt aliquip labore laborum adipisicing quis mollit
          reprehenderit veniam. Id reprehenderit duis consequat excepteur ea ut
          non non non. Pariatur labore irure nisi velit amet reprehenderit ipsum
          reprehenderit duis ad exercitation. Nostrud culpa incididunt ullamco
          cupidatat aliqua. Incididunt labore Lorem ea anim ut est sint occaecat
          occaecat adipisicing nisi ullamco adipisicing ut. Qui elit ut ea sunt
          eu fugiat reprehenderit nulla excepteur. Ipsum sunt mollit tempor
          pariatur nostrud in. Exercitation enim eiusmod cupidatat quis laborum.
          Ex voluptate esse ea eiusmod non laboris excepteur enim nostrud
          nostrud aliquip esse. Dolor do esse veniam excepteur laborum ea ea
          excepteur amet occaecat laboris fugiat dolore. Esse exercitation sunt
          excepteur officia ex ea. Dolor eu ut aliquip nisi. Proident pariatur
          culpa occaecat in et aute nisi aliquip labore. Cillum duis excepteur
          tempor adipisicing ipsum Lorem dolor commodo.
        </p>
      </Layout>
    )
  }
}

export default Services

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
