import HeadComponent from "../components/Head"
import HtmlParser from "../components/HtmlParser"
import Page from "../components/Page"
import React from "react"
import { graphql } from "gatsby"

const Cambridge = ({ data }) => {
  return (
    <Page
      title="Cambridge"
      image={data.headerImage.childMarkdownRemark.frontmatter.cambridge}
    >
      <HtmlParser input={data.body.childMarkdownRemark.html} />
    </Page>
  )
}

export default Cambridge

export const Head = () => <HeadComponent title="Cambridge" />

export const query = graphql`
  query ($light: String!, $dark: String!) {
    headerImage: file(
      sourceInstanceName: { eq: "content" }
      name: { eq: "images" }
    ) {
      childMarkdownRemark {
        frontmatter {
          cambridge {
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
      name: { eq: "cambridge" }
    ) {
      childMarkdownRemark {
        html
      }
    }
  }
`
