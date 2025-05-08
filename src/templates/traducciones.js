import HeadComponent from "../components/Head"
import HtmlParser from "../components/HtmlParser"
import Page from "../components/Page"
import React from "react"
import { graphql } from "gatsby"

const Traducciones = ({ data }) => {
  return (
    <Page
      title="Traducciones"
      image={data.headerImage.childMarkdownRemark.frontmatter.traducciones}
    >
      <HtmlParser input={data.body.childMarkdownRemark.html} />
    </Page>
  )
}

export default Traducciones

export const Head = () => <HeadComponent title="Traducciones" />

export const query = graphql`
  query ($light: String!, $dark: String!) {
    body: file(
      extension: { eq: "md" }
      name: { eq: "traducciones" }
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
          traducciones {
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
