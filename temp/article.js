import React from "react"
import Page from "../components/Page"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { connect } from "react-redux"
import parse, { domToReact } from "html-react-parser"
import { Typography, Link as MLink } from "@mui/material"
import moment from "moment"
import "moment/locale/es"
import ShareBar from "../components/ShareBar"

const Article = ({ data, isMobile }) => {
  const { title, date } = data.article.frontmatter

  return (
    <Page title={title}>
      <Typography variant="caption" display="block">
        Publicado el {moment(date).format("LL")}
        {` | `}
        <MLink
          component={Link}
          to="/noticias"
          underline="hover"
          sx={{ cursor: "pointer" }}
        >
          Volver a noticias
        </MLink>
      </Typography>
      <GatsbyImage
        image={getImage(
          isMobile
            ? data.article_image_mobile.frontmatter.featured_image
            : data.article_image_desktop.frontmatter.featured_image
        )}
        style={{ marginBottom: 15 }}
      />
      <ShareBar />
      {parse(data.article.html, {
        replace: domNode => {
          if (domNode.type === "tag" && domNode.name === "p") {
            if (!domNode.prev) {
              return (
                <Typography variant="lead" paragraph>
                  {domToReact(domNode.children)}
                </Typography>
              )
            }
            return (
              <Typography paragraph>{domToReact(domNode.children)}</Typography>
            )
          }
        },
      })}
    </Page>
  )
}

const stp = s => ({
  isMobile: s.isMobile,
})

export default connect(stp)(Article)

export const pageQuery = graphql`
  query ($id: String!) {
    article: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        date
      }
      html
    }
    article_image_desktop: markdownRemark(id: { eq: $id }) {
      frontmatter {
        featured_image {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1.75
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
    article_image_mobile: markdownRemark(id: { eq: $id }) {
      frontmatter {
        featured_image {
          childImageSharp {
            gatsbyImageData(
              aspectRatio: 1.2
              transformOptions: { cropFocus: CENTER }
            )
          }
        }
      }
    }
    og: markdownRemark(id: { eq: $id }) {
      frontmatter {
        featured_image {
          childImageSharp {
            gatsbyImageData(width: 1200, height: 627, layout: FIXED)
          }
        }
      }
    }
  }
`
