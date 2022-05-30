import HtmlParser from "../components/HtmlParser"
import Page from "../components/Page"
import React from "react"
import Seo from "../components/seo"
import { connect } from "react-redux"
import { graphql } from "gatsby"

const Informacion = ({ data, siteReady }) => {
  return (
    <>
      <Seo title="Información" />
      {siteReady && (
        <Page
          title="Información"
          image={data.headerImage.childMarkdownRemark.frontmatter.informacion}
        >
          <HtmlParser input={data.body.childMarkdownRemark.html} />
        </Page>
      )}
    </>
  )
}

const stp = s => ({
  siteReady: s.siteReady,
})

export default connect(stp)(Informacion)

export const query = graphql`
  query ($light: String!, $dark: String!) {
    headerImage: file(
      sourceInstanceName: { eq: "content" }
      name: { eq: "images" }
    ) {
      childMarkdownRemark {
        frontmatter {
          informacion {
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
    body: file(
      sourceInstanceName: { eq: "content" }
      name: { eq: "informacion" }
    ) {
      childMarkdownRemark {
        html
      }
    }
  }
`
