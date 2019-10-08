import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="AboutPage" />
        <h1>About Me</h1>
        <p>
          元ネットワーク屋さんのインフラエンジニア。 小学生のときにJava
          scriptとJAVAを間違えてPathの設定につまづき挫折。以来、プログラミングから離れていたが、アラサーでRubyに出会いプログラミングの楽しさを知る。
          好きなもの：語学、サウスパーク、心理学、静かなカフェ
        </p>
      </Layout>
    )
  }
}

export default AboutPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
