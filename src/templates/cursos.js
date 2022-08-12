import HeadComponent from "../components/Head"
import HtmlParser from "../components/HtmlParser"
import Page from "../components/Page"
import React from "react"
import { graphql } from "gatsby"

const Cursos = ({ data }) => {
  return (
    <Page
      title="Cursos"
      image={data.headerImage.childMarkdownRemark.frontmatter.cursos}
    >
      <HtmlParser input={data.body.childMarkdownRemark.html} />
    </Page>
  )
}

export const Head = () => <HeadComponent title="Cursos" />

export default Cursos

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
