import HtmlParser from "../components/HtmlParser"
import Page from "../components/Page"
import React from "react"
import Seo from "../components/seo"
import { connect } from "react-redux"
import { graphql } from "gatsby"

const Cursos = ({ data, siteReady }) => {
  return (
    <>
      <Seo title="Cursos" />
      {siteReady && (
        <Page
          title="Cursos"
          image={data.headerImage.childMarkdownRemark.frontmatter.cursos}
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

export default connect(stp)(Cursos)

export const query = graphql`
  query ($light: String!, $dark: String!) {
    headerImage: file(
      sourceInstanceName: { eq: "content" }
      name: { eq: "images" }
    ) {
      childMarkdownRemark {
        frontmatter {
          cursos {
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
    body: file(sourceInstanceName: { eq: "content" }, name: { eq: "courses" }) {
      childMarkdownRemark {
        html
      }
    }
  }
`
