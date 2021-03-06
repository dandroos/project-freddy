import HtmlParser from "../components/HtmlParser"
import Page from "../components/Page"
import React from "react"
import Seo from "../components/seo"
import { connect } from "react-redux"
import { graphql } from "gatsby"

const Conocenos = ({ data, siteReady }) => {
  return (
    <>
      <Seo title="Conócenos" />
      {siteReady && (
        <Page
          title="Conócenos"
          image={data.headerImage.childMarkdownRemark.frontmatter.conocenos}
        >
          <HtmlParser input={data.body.childMarkdownRemark.html} />
        </Page>
      )}
    </>
  )
}

const stp = s => ({
  siteReady: s.siteReady,
  isMobile: s.isMobile,
})

export default connect(stp)(Conocenos)

export const query = graphql`
  query ($light: String!, $dark: String!) {
    body: file(
      extension: { eq: "md" }
      name: { eq: "conocenos" }
      sourceInstanceName: { eq: "content" }
    ) {
      childMarkdownRemark {
        html
      }
    }
    headerImage: file(
      sourceInstanceName: { eq: "content" }
      name: { eq: "images" }
    ) {
      childMarkdownRemark {
        frontmatter {
          conocenos {
            childImageSharp {
              gatsbyImageData(
                aspectRatio: 1.5
                placeholder: BLURRED
                quality: 90
                transformOptions: {
                  duotone: { highlight: $light, shadow: $dark }
                }
              )
            }
          }
        }
      }
    }
  }
`
